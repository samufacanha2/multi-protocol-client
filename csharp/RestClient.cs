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
        var endpoints = new[] { "usuarios", "musicas", "playlists" };
        var numTests = new[] { 100, 200, 300 };

        foreach (var numTest in numTests)
        {
            Console.WriteLine($"{numTest} requests:");
            foreach (var endpoint in endpoints)
            {
                var start = DateTime.Now;

                for (int i = 0; i < numTest; i++)
                {
                    await SendRequestAsync(endpoint, i);
                }

                var end = DateTime.Now;
                Console.WriteLine($"{Capitalize(endpoint)} : {(end - start).TotalSeconds} seconds");
            }
        }
    }

    private string Capitalize(string s)
    {
        if (string.IsNullOrEmpty(s))
            return s;
        return char.ToUpper(s[0]) + s.Substring(1);
    }
}
