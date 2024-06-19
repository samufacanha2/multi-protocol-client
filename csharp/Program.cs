using System;
using System.Threading.Tasks;

public class Program
{
    public static async Task Main(string[] args)
    {
        Console.WriteLine("Starting load tests for REST client...");
        var restClient = new RestClient("http://localhost:5000/");
        await restClient.RunTests();
        Console.WriteLine("REST client tests completed.\n");

        Console.WriteLine("Starting load tests for GraphQL client...");
        var graphqlClient = new GraphqlClient("http://localhost:5002/graphql");
        await graphqlClient.RunTests();
        Console.WriteLine("GraphQL client tests completed.\n");

        Console.WriteLine("Starting load tests for SOAP client...");
        var soapClient = new SoapClient("http://localhost:5001/soap");
        await soapClient.RunTests();
        Console.WriteLine("SOAP client tests completed.\n");

        Console.WriteLine("Starting load tests for gRPC client...");
        var grpcClient = new GrpcClient("http://localhost:5003");
        await grpcClient.RunTests();
        Console.WriteLine("gRPC client tests completed.\n");
    }
}
