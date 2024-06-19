import { runTests as graphqlRunTests } from "./graphqlClient";
import { runTests as restRunTests } from "./restClient";
import { runTests as soapRunTests } from "./soapClient";
import { runTests as grpcRunTests } from "./grpcClient";

async function runTests() {
  console.log("REST");
  await restRunTests();
  console.log("\n");

  console.log("GraphQL");
  await graphqlRunTests();
  console.log("\n");

  console.log("SOAP");
  await soapRunTests();
  console.log("\n");

  console.log("gRPC");
  await grpcRunTests();
  console.log("\n");
}

runTests();
