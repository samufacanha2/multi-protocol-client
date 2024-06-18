run:
	go run main.go

build-run:
	go build -o build/main main.go
	./build/main

prepare:
	go mod tidy