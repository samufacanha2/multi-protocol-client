import requests
import time

BASE_URL = "http://localhost:5001/soap"
SOAP_ACTIONS = {
    "Usuarios": """<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:spy="spyne.examples.flask">
                     <soapenv:Header/>
                     <soapenv:Body>
                       <spy:ler_usuarios/>
                     </soapenv:Body>
                   </soapenv:Envelope>""",
    "Musicas": """<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:spy="spyne.examples.flask">
                    <soapenv:Header/>
                    <soapenv:Body>
                      <spy:ler_musicas/>
                    </soapenv:Body>
                  </soapenv:Envelope>""",
    "Playlists": """<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:spy="spyne.examples.flask">
                      <soapenv:Header/>
                      <soapenv:Body>
                        <spy:ler_playlists/>
                      </soapenv:Body>
                    </soapenv:Envelope>""",
}
TEST_COUNTS = [100, 200, 300]


def test_load(action, name, num_test):
    start = time.time()

    for i in range(num_test):
        try:
            response = requests.post(
                BASE_URL, data=action, headers={"Content-Type": "text/xml"}
            )
            response.raise_for_status()
        except requests.RequestException as e:
            print(f"Request {i} failed: {e}")
            if response is not None:
                print(f"Response content: {response.content}")

    end = time.time()
    print(
        f"{name} load test with {num_test} requests completed in {end - start:.6f} seconds"
    )


def run_tests():
    for num_test in TEST_COUNTS:
        print(f"Running tests with {num_test} requests:")
        for name, action in SOAP_ACTIONS.items():
            test_load(action, name, num_test)


if __name__ == "__main__":
    run_tests()
