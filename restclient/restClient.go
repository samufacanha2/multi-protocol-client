package restclient

import (
	"fmt"
	"net/http"
	"sync"
	"time"
)

var testCounts = []int{100, 200, 300}

const baseURL = "http://localhost:5000"

var endpoints = map[string]string{
	"usuarios":  "/usuarios",
	"musicas":   "/musicas",
	"playlists": "/playlists",
}

func testLoad(endpoint, name string, numTest int) {
	url := baseURL + endpoint
	start := time.Now()

	var wg sync.WaitGroup
	rateLimiter := time.Tick(10 * time.Millisecond) // 100 requests per second

	for i := 0; i < numTest; i++ {
		<-rateLimiter
		wg.Add(1)
		go func(i int) {
			defer wg.Done()
			resp, err := http.Get(url)
			if err != nil {
				fmt.Printf("Request %d failed: %v\n", i, err)
				return
			}
			defer resp.Body.Close()
			if resp.StatusCode != http.StatusOK {
				fmt.Printf("Request %d failed with status: %s\n", i, resp.Status)
			}
		}(i)
	}
	wg.Wait()

	end := time.Now()
	fmt.Printf("%s load test with %d requests completed in %v seconds\n", name, numTest, end.Sub(start).Seconds())
}

func RunTests() {
	for _, numTest := range testCounts {
		fmt.Printf("Running tests with %d requests:\n", numTest)
		testLoad(endpoints["usuarios"], "Usuarios", numTest)
		testLoad(endpoints["musicas"], "Musicas", numTest)
		testLoad(endpoints["playlists"], "Playlists", numTest)
	}
}
