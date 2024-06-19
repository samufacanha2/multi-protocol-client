from clients.rest_client import run_tests as rest_run_tests
from clients.graphql_client import run_tests as graphql_run_tests
from clients.soap_client import run_tests as soap_run_tests
from clients.grpc_client import run_tests as grpc_run_tests


def run_tests():
    print("REST")
    rest_run_tests()
    print("\n")

    print("GraphQL")
    graphql_run_tests()
    print("\n")

    print("SOAP")
    soap_run_tests()
    print("\n")

    print("gRPC")
    grpc_run_tests()
    print("\n")


if __name__ == "__main__":
    run_tests()
