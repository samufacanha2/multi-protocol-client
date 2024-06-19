using System;
using System.Net.Http;
using System.Threading.Tasks;

public class RestClient
{
    private readonly HttpClient _client;

    public RestClient(string baseAddress)
    {
        _client = new HttpClient { BaseAddress = new Uri(baseAddress) };
    }

    private async Task SendRequestAsync(string endpoint, int i)
    {
        try
        {
            var response = await _client.GetAsync(endpoint);
            response.EnsureSuccessStatusCode();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Request {i} to {endpoint} failed: {ex.Message}");
        }
    }

    public async Task RunTests()
    {
        Console.WriteLine("Running REST tests...");

        var endpoints = new[] { "usuarios", "musicas", "playlists" };
        var numTests = new[] { 100, 200, 300 };

        foreach (var numTest in numTests)
        {
            var start = DateTime.Now;
            Console.WriteLine($"Running tests with {numTest} requests:");

            foreach (var endpoint in endpoints)
            {
                for (int i = 0; i < numTest; i++)
                {
                    await SendRequestAsync(endpoint, i);
                }
            }

            var end = DateTime.Now;
            Console.WriteLine(
                $"REST tests with {numTest} requests completed in {(end - start).TotalSeconds} seconds"
            );
        }
    }
}
