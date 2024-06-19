using System;
using System.Threading.Tasks;
using GraphQL.Client.Http;
using GraphQL.Client.Serializer.Newtonsoft;

public class GraphqlClient
{
    private readonly GraphQLHttpClient _client;

    public GraphqlClient(string baseAddress)
    {
        _client = new GraphQLHttpClient(
            new GraphQLHttpClientOptions { EndPoint = new Uri(baseAddress) },
            new NewtonsoftJsonSerializer()
        );
    }

    private async Task SendRequestAsync(GraphQLHttpRequest request, int i)
    {
        try
        {
            var response = await _client.SendQueryAsync<dynamic>(request);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Request {i} failed: {ex.Message}");
        }
    }

    public async Task RunTests()
    {
        var queries = new[]
        {
            new { Name = "Usuarios", Query = "{ usuarios { ID nome } }" },
            new { Name = "Musicas", Query = "{ musicas { ID nome } }" },
            new { Name = "Playlists", Query = "{ playlists { ID nome } }" }
        };

        var numTests = new[] { 100, 200, 300 };

        foreach (var numTest in numTests)
        {
            Console.WriteLine($"{numTest} requests:");
            foreach (var query in queries)
            {
                var request = new GraphQLHttpRequest(query.Query);
                var start = DateTime.Now;

                for (int i = 0; i < numTest; i++)
                {
                    await SendRequestAsync(request, i);
                }

                var end = DateTime.Now;
                Console.WriteLine($"{query.Name} : {(end - start).TotalSeconds} seconds");
            }
        }
    }
}
