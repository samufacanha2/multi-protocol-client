import requests
import time

BASE_URL = "http://localhost:5000"
ENDPOINTS = ["/usuarios", "/musicas", "/playlists"]
TEST_COUNTS = [100, 200, 300]


def test_load(endpoint, name, num_test):
    url = f"{BASE_URL}{endpoint}"
    start = time.time()

    for i in range(num_test):
        try:
            response = requests.get(url)
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
        for endpoint in ENDPOINTS:
            test_load(endpoint, endpoint, num_test)


if __name__ == "__main__":
    run_tests()
