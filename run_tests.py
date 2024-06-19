import subprocess
import csv
import re
import os

# Define the commands to run the load tests for each language
commands = {
    "go": "go run main.go",
    "rust": "cargo run --release",
    "typescript": "npm start",
    "python": "python3 main.py",
    "csharp": "dotnet run",
}

# Define the directories for each language
directories = {
    "go": "go",
    "rust": "rust",
    "typescript": "typescript",
    "python": "python",
    "csharp": "csharp",
}

# Define the protocols for each language
protocols = {
    "go": "grpc",
    "rust": "rest",
    "typescript": "rest",
    "python": "graphql",
    "csharp": "soap",
}

# Regular expression to extract the timing information
time_pattern = re.compile(r"(\d+) requests:\n(?:.*?:.*?seconds\n)+")

# Regular expression to extract individual timings
detail_pattern = re.compile(r"(\w+)\s*:\s*([\d.]+)\s*seconds")

# Dictionary to store the extracted timings
results = {
    "Language": [],
    "Protocol": [],
    "Endpoint": [],
    "Requests": [],
    "Time (seconds)": [],
}

# Ensure the output directory exists
output_dir = "out"
os.makedirs(output_dir, exist_ok=True)

# Run the tests and capture the output
for language, command in commands.items():
    print(f"Running {language} tests...")
    directory = directories[language]
    protocol = protocols[language]
    output_file = os.path.join(output_dir, f"{language}_output.txt")

    with open(output_file, "w") as outfile:
        if language == "rust":
            # Separate build and run for Rust to clean the output
            build_process = subprocess.Popen(
                "cargo build --release",
                shell=True,
                cwd=directory,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
            )
            build_stdout, build_stderr = build_process.communicate()

            run_process = subprocess.Popen(
                "cargo run --release",
                shell=True,
                cwd=directory,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
            )
            stdout, stderr = run_process.communicate()

            outfile.write(stdout.decode())
            outfile.write(stderr.decode())
        else:
            process = subprocess.Popen(
                command,
                shell=True,
                cwd=directory,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
            )
            stdout, stderr = process.communicate()

            outfile.write(stdout.decode())
            outfile.write(stderr.decode())

    # Extract the timings from the output
    with open(output_file, "r") as infile:
        content = infile.read()
        for batch in time_pattern.finditer(content):
            batch_requests = batch.group(1)
            for detail in detail_pattern.finditer(batch.group(0)):
                endpoint, time = detail.groups()
                results["Language"].append(language)
                results["Protocol"].append(protocol)
                results["Endpoint"].append(endpoint)
                results["Requests"].append(batch_requests)
                results["Time (seconds)"].append(time)

# Write the results to a CSV file
csv_file = os.path.join(output_dir, "load_test_results.csv")
with open(csv_file, "w", newline="") as csvfile:
    writer = csv.DictWriter(csvfile, fieldnames=results.keys())
    writer.writeheader()
    writer.writerows(
        [
            {
                "Language": lang,
                "Protocol": proto,
                "Endpoint": endpoint,
                "Requests": req,
                "Time (seconds)": time,
            }
            for lang, proto, endpoint, req, time in zip(
                results["Language"],
                results["Protocol"],
                results["Endpoint"],
                results["Requests"],
                results["Time (seconds)"],
            )
        ]
    )

print(f"Results written to {csv_file}")
