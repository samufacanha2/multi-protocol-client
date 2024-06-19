use reqwest::Client;
use std::time::Instant;

const BASE_URL: &str = "http://localhost:5000";

pub async fn run_tests() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new();
    let test_counts = vec![100, 200, 300];
    let endpoints = vec!["usuarios", "musicas", "playlists"];

    for &count in &test_counts {
        println!("{} requests:", count);
        for &endpoint in &endpoints {
            let start = Instant::now();
            for i in 0..count {
                let url = format!("{}/{}", BASE_URL, endpoint);
                let res = client.get(&url).send().await;
                if let Err(err) = res {
                    eprintln!("Request {} to {} failed: {:?}", i, url, err);
                }
            }
            let duration = start.elapsed();
            println!(
                "{} : {:.6} seconds",
                capitalize(endpoint),
                duration.as_secs_f64()
            );
        }
    }

    Ok(())
}

fn capitalize(s: &str) -> String {
    let mut c = s.chars();
    match c.next() {
        None => String::new(),
        Some(f) => f.to_uppercase().collect::<String>() + c.as_str(),
    }
}
