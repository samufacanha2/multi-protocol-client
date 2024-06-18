package main

import (
	"fmt"
	"musicas-client/graphqlclient"
	"musicas-client/grpcclient"
	"musicas-client/restclient"
	"musicas-client/soapclient"
)

func main() {
	fmt.Println("Starting load tests for REST client...")
	restclient.RunTests()
	fmt.Println("REST client tests completed.")

	fmt.Println("Starting load tests for GraphQL client...")
	graphqlclient.RunTests()
	fmt.Println("GraphQL client tests completed.")

	fmt.Println("Starting load tests for SOAP client...")
	soapclient.RunTests()
	fmt.Println("SOAP client tests completed.")

	fmt.Println("Starting load tests for gRPC client...")
	grpcclient.RunTests()
	fmt.Println("gRPC client tests completed.")
}
