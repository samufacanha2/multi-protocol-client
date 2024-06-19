using System;
using System.Threading.Tasks;
using Grpc.Net.Client;
using MusicaApp;

public class GrpcClient
{
    private readonly GrpcChannel _channel;
    private readonly UsuarioService.UsuarioServiceClient _usuarioClient;
    private readonly MusicaService.MusicaServiceClient _musicaClient;
    private readonly PlaylistService.PlaylistServiceClient _playlistClient;

    public GrpcClient(string address)
    {
        _channel = GrpcChannel.ForAddress(address);
        _usuarioClient = new UsuarioService.UsuarioServiceClient(_channel);
        _musicaClient = new MusicaService.MusicaServiceClient(_channel);
        _playlistClient = new PlaylistService.PlaylistServiceClient(_channel);
    }

    private async Task SendRequestAsync(Func<Task> requestFunc, int i)
    {
        try
        {
            await requestFunc();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Request {i} failed: {ex.Message}");
        }
    }

    public async Task RunTests()
    {
        var empty = new Empty();
        var numTests = new[] { 100, 200, 300 };

        foreach (var numTest in numTests)
        {
            Console.WriteLine($"{numTest} requests:");
            foreach (var endpoint in new[] { "Usuarios", "Musicas", "Playlists" })
            {
                var start = DateTime.Now;

                for (int i = 0; i < numTest; i++)
                {
                    if (endpoint == "Usuarios")
                        await SendRequestAsync(
                            () => _usuarioClient.LerUsuariosAsync(empty).ResponseAsync,
                            i
                        );
                    else if (endpoint == "Musicas")
                        await SendRequestAsync(
                            () => _musicaClient.LerMusicasAsync(empty).ResponseAsync,
                            i
                        );
                    else if (endpoint == "Playlists")
                        await SendRequestAsync(
                            () => _playlistClient.LerPlaylistsAsync(empty).ResponseAsync,
                            i
                        );
                }

                var end = DateTime.Now;
                Console.WriteLine($"{endpoint} : {(end - start).TotalSeconds} seconds");
            }
        }
    }
}
