use std::time::Instant;
use tonic::{transport::Channel, Request};

pub mod musica_app {
    tonic::include_proto!("musica_app");
}

use musica_app::musica_service_client::MusicaServiceClient;
use musica_app::playlist_service_client::PlaylistServiceClient;
use musica_app::usuario_service_client::UsuarioServiceClient;
use musica_app::Empty;

pub async fn run_tests() -> Result<(), Box<dyn std::error::Error>> {
    let test_counts = vec![100, 200, 300];
    let channel = Channel::from_static("http://localhost:5003")
        .connect()
        .await?;

    let mut usuario_client = UsuarioServiceClient::new(channel.clone());
    let mut musica_client = MusicaServiceClient::new(channel.clone());
    let mut playlist_client = PlaylistServiceClient::new(channel.clone());

    for &count in &test_counts {
        println!("Running tests with {} requests:", count);

        let start = Instant::now();
        for _ in 0..count {
            let request = Request::new(Empty {});
            let res = usuario_client.ler_usuarios(request).await;
            if let Err(err) = res {
                eprintln!("Request failed: {:?}", err);
            }
        }
        let duration = start.elapsed();
        println!(
            "Usuarios load test with {} requests completed in {:.2?} seconds",
            count, duration
        );

        let start = Instant::now();
        for _ in 0..count {
            let request = Request::new(Empty {});
            let res = musica_client.ler_musicas(request).await;
            if let Err(err) = res {
                eprintln!("Request failed: {:?}", err);
            }
        }
        let duration = start.elapsed();
        println!(
            "Musicas load test with {} requests completed in {:.2?} seconds",
            count, duration
        );

        let start = Instant::now();
        for _ in 0..count {
            let request = Request::new(Empty {});
            let res = playlist_client.ler_playlists(request).await;
            if let Err(err) = res {
                eprintln!("Request failed: {:?}", err);
            }
        }
        let duration = start.elapsed();
        println!(
            "Playlists load test with {} requests completed in {:.2?} seconds",
            count, duration
        );
    }

    Ok(())
}
