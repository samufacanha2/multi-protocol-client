package graphqlclient

import (
	"context"
	"fmt"
	"sync"
	"time"

	"github.com/machinebox/graphql"
)

var testCounts = []int{100, 200, 300}

const baseURL = "http://127.0.0.1:5002/graphql"

var queries = map[string]string{
	"usuarios":  `{ usuarios { ID nome } }`,
	"musicas":   `{ musicas { ID nome } }`,
	"playlists": `{ playlists { ID nome } }`,
}

func testLoad(client *graphql.Client, query, name string, numTest int) {
	start := time.Now()

	var wg sync.WaitGroup

	for i := 0; i < numTest; i++ {
		wg.Add(1)
		func(i int) {
			defer wg.Done()
			req := graphql.NewRequest(query)
			ctx := context.Background()
			var res map[string]interface{}
			if err := client.Run(ctx, req, &res); err != nil {
				fmt.Printf("Request %d failed: %v\n", i, err)
				return
			}
		}(i)
	}
	wg.Wait()

	end := time.Now()
	fmt.Printf("%s load test with %d requests completed in %v seconds\n", name, numTest, end.Sub(start).Seconds())
}

func RunTests() {
	client := graphql.NewClient(baseURL)
	for _, numTest := range testCounts {
		fmt.Printf("Running tests with %d requests:\n", numTest)
		testLoad(client, queries["usuarios"], "Usuarios", numTest)
		testLoad(client, queries["musicas"], "Musicas", numTest)
		testLoad(client, queries["playlists"], "Playlists", numTest)
	}
}
