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

	for i := 0; i < numTest; i++ {
		wg.Add(1)
		func(i int) {
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
	fmt.Printf("%s : %v seconds\n", name, end.Sub(start).Seconds())
}

func RunTests() {
	for _, numTest := range testCounts {
		fmt.Printf("%d requests:\n", numTest)
		testLoad(endpoints["usuarios"], "Usuarios", numTest)
		testLoad(endpoints["musicas"], "Musicas", numTest)
		testLoad(endpoints["playlists"], "Playlists", numTest)
	}
}
