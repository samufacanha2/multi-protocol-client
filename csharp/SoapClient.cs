using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

public class SoapClient
{
    private readonly HttpClient _client;

    public SoapClient(string baseAddress)
    {
        _client = new HttpClient { BaseAddress = new Uri(baseAddress) };
    }

    private async Task SendRequestAsync(string action, int i)
    {
        try
        {
            var content = new StringContent(action, Encoding.UTF8, "text/xml");
            var response = await _client.PostAsync("", content);
            response.EnsureSuccessStatusCode();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Request {i} failed: {ex.Message}");
        }
    }

    public async Task RunTests()
    {
        var soapActions = new[]
        {
            new
            {
                Name = "Usuarios",
                Action = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:spy=\"spyne.examples.flask\"><soapenv:Header/><soapenv:Body><spy:ler_usuarios/></soapenv:Body></soapenv:Envelope>"
            },
            new
            {
                Name = "Musicas",
                Action = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:spy=\"spyne.examples.flask\"><soapenv:Header/><soapenv:Body><spy:ler_musicas/></soapenv:Body></soapenv:Envelope>"
            },
            new
            {
                Name = "Playlists",
                Action = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:spy=\"spyne.examples.flask\"><soapenv:Header/><soapenv:Body><spy:ler_playlists/></soapenv:Body></soapenv:Envelope>"
            }
        };

        var numTests = new[] { 100, 200, 300 };

        foreach (var numTest in numTests)
        {
            Console.WriteLine($"{numTest} requests:");
            foreach (var soapAction in soapActions)
            {
                var start = DateTime.Now;

                for (int i = 0; i < numTest; i++)
                {
                    await SendRequestAsync(soapAction.Action, i);
                }

                var end = DateTime.Now;
                Console.WriteLine($"{soapAction.Name} : {(end - start).TotalSeconds} seconds");
            }
        }
    }
}
