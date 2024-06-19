from clients.rest_client import run_tests as rest_run_tests
from clients.graphql_client import run_tests as graphql_run_tests
from clients.soap_client import run_tests as soap_run_tests
from clients.grpc_client import run_tests as grpc_run_tests


def run_tests():
    print("Starting load tests for REST client...")
    rest_run_tests()
    print("REST client tests completed.\n")

    print("Starting load tests for GraphQL client...")
    graphql_run_tests()
    print("GraphQL client tests completed.\n")

    print("Starting load tests for SOAP client...")
    soap_run_tests()
    print("SOAP client tests completed.\n")

    print("Starting load tests for gRPC client...")
    grpc_run_tests()
    print("gRPC client tests completed.\n")


if __name__ == "__main__":
    run_tests()
