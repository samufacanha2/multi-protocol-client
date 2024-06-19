mod graphql_client;
mod grpc_client;
mod rest_client;
mod soap_client;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    println!("REST");
    rest_client::run_tests().await?;
    println!("");

    println!("GraphQL");
    graphql_client::run_tests().await?;
    println!("");

    println!("SOAP");
    soap_client::run_tests().await?;
    println!("");

    println!("gRPC");
    grpc_client::run_tests().await?;
    println!("");

    Ok(())
}
