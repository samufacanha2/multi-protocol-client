package main

import (
	"fmt"
	"musicas-client/graphqlclient"
	"musicas-client/grpcclient"
	"musicas-client/restclient"
	"musicas-client/soapclient"
)

func main() {
	fmt.Println("REST")
	restclient.RunTests()
	fmt.Println("")

	fmt.Println("GraphQL")
	graphqlclient.RunTests()
	fmt.Println("")

	fmt.Println("SOAP")
	soapclient.RunTests()
	fmt.Println("")

	fmt.Println("gRPC")
	grpcclient.RunTests()
	fmt.Println("")
}
