import { runTests as graphqlRunTests } from "./graphqlClient";
import { runTests as restRunTests } from "./restClient";
import { runTests as soapRunTests } from "./soapClient";
import { runTests as grpcRunTests } from "./grpcClient";

async function runTests() {
  console.log("Starting load tests for REST client...");
  await restRunTests();
  console.log("REST client tests completed.\n");

  console.log("Starting load tests for GraphQL client...");
  await graphqlRunTests();
  console.log("GraphQL client tests completed.\n");

  console.log("Starting load tests for SOAP client...");
  await soapRunTests();
  console.log("SOAP client tests completed.\n");

  console.log("Starting load tests for gRPC client...");
  await grpcRunTests();
  console.log("gRPC client tests completed.\n");
}

runTests();
