use reqwest::Client;
use std::time::Instant;

const BASE_URL: &str = "http://localhost:5000";

pub async fn run_tests() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new();
    let test_counts = vec![100, 200, 300];
    let endpoints = vec!["/usuarios", "/musicas", "/playlists"];

    for &count in &test_counts {
        println!("Running tests with {} requests:", count);
        for &endpoint in &endpoints {
            let start = Instant::now();
            for _ in 0..count {
                let url = format!("{}{}", BASE_URL, endpoint);
                let res = client.get(&url).send().await;
                if let Err(err) = res {
                    eprintln!("Request failed: {:?}", err);
                }
            }
            let duration = start.elapsed();
            println!(
                "{} load test with {} requests completed in {:.2?} seconds",
                endpoint, count, duration
            );
        }
    }

    Ok(())
}
