package grpcclient

import (
	"context"
	"fmt"
	"log"
	"sync"
	"time"

	"google.golang.org/grpc"

	"musicas-client/proto"
)

var testCounts = []int{100, 200, 300}

func testLoad(client interface{}, method string, args interface{}, name string, numTest int) {
	start := time.Now()

	var wg sync.WaitGroup
	for i := 0; i < numTest; i++ {
		wg.Add(1)
		func() {
			defer wg.Done()
			switch method {
			case "LerUsuarios":
				c := client.(proto.UsuarioServiceClient)
				_, err := c.LerUsuarios(context.Background(), args.(*proto.Empty))
				if err != nil {
					log.Fatalf("Error: %v", err)
				}
			case "LerMusicas":
				c := client.(proto.MusicaServiceClient)
				_, err := c.LerMusicas(context.Background(), args.(*proto.Empty))
				if err != nil {
					log.Fatalf("Error: %v", err)
				}
			case "LerPlaylists":
				c := client.(proto.PlaylistServiceClient)
				_, err := c.LerPlaylists(context.Background(), args.(*proto.Empty))
				if err != nil {
					log.Fatalf("Error: %v", err)
				}
			default:
				log.Fatalf("Unknown method: %v", method)
			}
		}()
	}
	wg.Wait()

	end := time.Now()
	fmt.Printf("%s load test with %d requests completed in %v seconds\n", name, numTest, end.Sub(start).Seconds())
}

func RunTests() {
	conn, err := grpc.Dial("localhost:5003", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("Failed to connect: %v", err)
	}
	defer conn.Close()

	clientUsuario := proto.NewUsuarioServiceClient(conn)
	clientMusica := proto.NewMusicaServiceClient(conn)
	clientPlaylist := proto.NewPlaylistServiceClient(conn)

	for _, numTest := range testCounts {
		fmt.Printf("Running tests with %d requests:\n", numTest)

		testLoad(clientUsuario, "LerUsuarios", &proto.Empty{}, "Ler Usuários", numTest)
		testLoad(clientMusica, "LerMusicas", &proto.Empty{}, "Ler Músicas", numTest)
		testLoad(clientPlaylist, "LerPlaylists", &proto.Empty{}, "Listar Playlists", numTest)
	}
}
