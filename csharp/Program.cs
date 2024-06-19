using System;
using System.Threading.Tasks;

public class Program
{
    public static async Task Main(string[] args)
    {
        Console.WriteLine("REST");
        var restClient = new RestClient("http://localhost:5000/");
        await restClient.RunTests();
        Console.WriteLine("\n");

        Console.WriteLine("GraphQL");
        var graphqlClient = new GraphqlClient("http://localhost:5002/graphql");
        await graphqlClient.RunTests();
        Console.WriteLine("\n");

        Console.WriteLine("SOAP");
        var soapClient = new SoapClient("http://localhost:5001/soap");
        await soapClient.RunTests();
        Console.WriteLine("\n");

        Console.WriteLine("gRPC");
        var grpcClient = new GrpcClient("http://localhost:5003");
        await grpcClient.RunTests();
        Console.WriteLine("\n");
    }
}
