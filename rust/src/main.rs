mod graphql_client;
mod grpc_client;
mod rest_client;
mod soap_client;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    println!("Starting load tests for REST client...");
    rest_client::run_tests().await?;
    println!("REST client tests completed.\n");

    println!("Starting load tests for GraphQL client...");
    graphql_client::run_tests().await?;
    println!("GraphQL client tests completed.\n");

    println!("Starting load tests for SOAP client...");
    soap_client::run_tests().await?;
    println!("SOAP client tests completed.\n");

    println!("Starting load tests for gRPC client...");
    grpc_client::run_tests().await?;
    println!("gRPC client tests completed.\n");

    Ok(())
}
