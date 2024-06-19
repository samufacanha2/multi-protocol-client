# Load Test Clients

This repository contains load test clients for gRPC, REST, SOAP, and GraphQL services implemented in Go, Rust, TypeScript, and Python.

## Server

You will find more info on how to run the server in [this GitHub repository.](https://github.com/samufacanha2/multi-protocol-db)

## How Load Tests Are Made

The load tests are designed to simulate multiple requests to the services to evaluate their performance under stress. The clients are implemented to do the following:

- Create a client for the respective service (gRPC, REST, SOAP, GraphQL).
- Sends a specified number of requests sequentially to the service/endpoint that lists users, musics, and playlists.
- Measures and prints the time taken to complete all requests.

The tests are configured to send a series of requests (e.g., 100, 200, 300) to the respective endpoints and measure the duration taken for the requests to complete. This helps in identifying performance bottlenecks and understanding the scalability of the services.

## Setup Instructions

Each project has a `makefile` with the most common commands to build and run the clients, use them for quick reference or shortcuts if you have access to `make` in your terminal.

Follow the instructions below to setup and run the clients.

### Go Clients

1. **Navigate to the Go directory:**

   ```sh
   cd go
   ```

2. **Build and Run:**
   ```sh
   go build -o build/go
   ./build/go
   ```

**Optional: Generate Protobuf Files:**

If you want to update the protobuf files, you can do so by following the steps below.

Ensure you have `protoc` and the Go plugins for gRPC installed.

```sh
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest

protoc --go_out=. --go-grpc_out=. ./proto/dtos.proto
```

### Rust Clients

1. **Navigate to the Rust directory:**

   ```sh
   cd rust
   ```

2. **Build and Run:**

   ```sh
   cargo build
   cargo run
   ```

### TypeScript Clients

1. **Navigate to the TypeScript directory:**

   ```sh
   cd ts
   ```

2. **Install Dependencies:**

   ```sh
   npm install
   ```

3. **Run:**
   ```sh
   npm run start
   ```

### Python Clients

1. **Navigate to the Python directory:**

   ```sh
   cd python
   ```

2. **Install Dependencies:**

   ```sh
   pip install -r requirements.txt
   ```

3. **Run the Clients:**

   ```sh
   python main.py
   ```

## Running Load Tests

Each client implementation (Go, Rust, TypeScript, Python) has its own main file to run load tests for gRPC, REST, SOAP, and GraphQL services. Follow the setup instructions for each language to build and run the clients.
