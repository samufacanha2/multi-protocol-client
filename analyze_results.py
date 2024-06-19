import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import os

# Read the CSV file
csv_file = "out/load_test_results.csv"
df = pd.read_csv(csv_file)

# Convert 'Time (seconds)' to float for accurate sorting and plotting
df["Time (seconds)"] = df["Time (seconds)"].astype(float)

# Ensure the output charts directory exists
charts_dir = "out/charts"
os.makedirs(charts_dir, exist_ok=True)

# Filter data for 'usuarios' endpoint with 300 requests
usuarios_300 = df[(df["Endpoint"] == "Usuarios") & (df["Requests"] == 300)]

if not usuarios_300.empty:
    # Determine the best, worst, and intermediary language/protocol for the 'usuarios' route with 300 requests
    best_result = usuarios_300.loc[usuarios_300["Time (seconds)"].idxmin()]
    worst_result = usuarios_300.loc[usuarios_300["Time (seconds)"].idxmax()]
    intermediary_result = usuarios_300.iloc[
        (usuarios_300["Time (seconds)"].argsort().iloc[len(usuarios_300) // 2])
    ]

    combined_results = pd.DataFrame([best_result, intermediary_result, worst_result])

    combined_results["Protocol + Language"] = (
        combined_results["Protocol"] + " + " + combined_results["Language"]
    )

    # Plot the best, intermediary, and worst results
    plt.figure(figsize=(14, 8))
    sns.barplot(
        data=combined_results, x="Protocol + Language", y="Time (seconds)", dodge=True
    )
    plt.title(
        "Best, Intermediary, and Worst Load Test Results (300 requests for Usuarios)"
    )
    plt.xticks(ha="right")
    plt.savefig(f"{charts_dir}/best_intermediary_worst_load_test_results.png")
    plt.show()

else:
    print("No data available for 'usuarios' endpoint with 300 requests.")

# Plot the results for each language
languages = df["Language"].unique()
fig, axs = plt.subplots(1, 5, figsize=(30, 6), sharey=True)
fig.suptitle("Load Test Results by Language")

for ax, language in zip(axs, languages):
    sns.barplot(
        data=df[df["Language"] == language],
        x="Requests",
        y="Time (seconds)",
        hue="Endpoint",
        ax=ax,
    )
    ax.set_title(language.capitalize())
    ax.set_xlabel("Requests")
    ax.set_ylabel("Time (seconds)")

plt.savefig(f"{charts_dir}/load_test_results_by_language.png")
plt.show()

# Plot the results for each protocol
protocols = df["Protocol"].unique()
fig, axs = plt.subplots(1, 4, figsize=(24, 6), sharey=True)
fig.suptitle("Load Test Results by Protocol")

for ax, protocol in zip(axs, protocols):
    sns.barplot(
        data=df[df["Protocol"] == protocol],
        x="Requests",
        y="Time (seconds)",
        hue="Endpoint",
        ax=ax,
    )
    ax.set_title(protocol.capitalize())
    ax.set_xlabel("Requests")
    ax.set_ylabel("Time (seconds)")

plt.savefig(f"{charts_dir}/load_test_results_by_protocol.png")
plt.show()

print("Charts have been saved to the 'out/charts' directory.")
