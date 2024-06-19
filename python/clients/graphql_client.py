import requests
import time

BASE_URL = "http://127.0.0.1:5002/graphql"
TEST_COUNTS = [100, 200, 300]
QUERIES = {
    "usuarios": "{ usuarios { ID nome } }",
    "musicas": "{ musicas { ID nome } }",
    "playlists": "{ playlists { ID nome } }",
}


def test_load(query, name, num_test):
    start = time.time()

    for i in range(num_test):
        try:
            response = requests.post(BASE_URL, json={"query": query})
            response.raise_for_status()
        except requests.RequestException as e:
            print(f"Request {i} failed: {e}")

    end = time.time()
    print(
        f"{name} load test with {num_test} requests completed in {end - start:.6f} seconds"
    )


def run_tests():
    for num_test in TEST_COUNTS:
        print(f"Running tests with {num_test} requests:")
        for name, query in QUERIES.items():
            test_load(query, name, num_test)


if __name__ == "__main__":
    run_tests()
