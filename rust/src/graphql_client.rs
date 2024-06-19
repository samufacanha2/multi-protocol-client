use graphql_client::GraphQLQuery;
use reqwest::Client;
use std::time::Instant;

const BASE_URL: &str = "http://127.0.0.1:5002/graphql";

#[derive(GraphQLQuery)]
#[graphql(
    schema_path = "schema/schema.graphql",
    query_path = "schema/query.graphql",
    response_derives = "Debug"
)]
struct Usuarios;

#[derive(GraphQLQuery)]
#[graphql(
    schema_path = "schema/schema.graphql",
    query_path = "schema/query.graphql",
    response_derives = "Debug"
)]
struct Musicas;

#[derive(GraphQLQuery)]
#[graphql(
    schema_path = "schema/schema.graphql",
    query_path = "schema/query.graphql",
    response_derives = "Debug"
)]
struct Playlists;

pub async fn run_tests() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new();
    let test_counts = vec![100, 200, 300];

    for &count in &test_counts {
        println!("{} requests:", count);

        let start = Instant::now();
        for _ in 0..count {
            let res = client
                .post(BASE_URL)
                .json(&Usuarios::build_query(usuarios::Variables {}))
                .send()
                .await;
            if let Err(err) = res {
                eprintln!("Request failed: {:?}", err);
            }
        }
        let duration = start.elapsed();
        println!("Usuarios : {:.6} seconds", duration.as_secs_f64());

        let start = Instant::now();
        for _ in 0..count {
            let res = client
                .post(BASE_URL)
                .json(&Musicas::build_query(musicas::Variables {}))
                .send()
                .await;
            if let Err(err) = res {
                eprintln!("Request failed: {:?}", err);
            }
        }
        let duration = start.elapsed();
        println!("Musicas : {:.6} seconds", duration.as_secs_f64());

        let start = Instant::now();
        for _ in 0..count {
            let res = client
                .post(BASE_URL)
                .json(&Playlists::build_query(playlists::Variables {}))
                .send()
                .await;
            if let Err(err) = res {
                eprintln!("Request failed: {:?}", err);
            }
        }
        let duration = start.elapsed();
        println!("Playlists : {:.6} seconds", duration.as_secs_f64());
    }

    Ok(())
}
