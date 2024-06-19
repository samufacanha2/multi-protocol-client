package soapclient

import (
	"bytes"
	"fmt"
	"io/ioutil"
	"net/http"
	"sync"
	"time"
)

var testCounts = []int{100, 200, 300}

const baseURL = "http://localhost:5001/soap"

var soapActions = map[string]string{
	"Usuarios": `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:spy="spyne.examples.flask">
                   <soapenv:Header/>
                   <soapenv:Body>
                     <spy:ler_usuarios/>
                   </soapenv:Body>
                 </soapenv:Envelope>`,
	"Musicas": `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:spy="spyne.examples.flask">
                  <soapenv:Header/>
                  <soapenv:Body>
                    <spy:ler_musicas/>
                  </soapenv:Body>
                </soapenv:Envelope>`,
	"Playlists": `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:spy="spyne.examples.flask">
                    <soapenv:Header/>
                    <soapenv:Body>
                      <spy:ler_playlists/>
                    </soapenv:Body>
                  </soapenv:Envelope>`,
}

func testLoad(action, name string, numTest int) {
	start := time.Now()

	var wg sync.WaitGroup

	for i := 0; i < numTest; i++ {
		wg.Add(1)
		func(i int) {
			defer wg.Done()
			req, err := http.NewRequest("POST", baseURL, bytes.NewBuffer([]byte(action)))
			if err != nil {
				fmt.Printf("Request %d failed: %v\n", i, err)
				return
			}
			req.Header.Set("Content-Type", "text/xml")
			client := &http.Client{}
			resp, err := client.Do(req)
			if err != nil {
				fmt.Printf("Request %d failed: %v\n", i, err)
				return
			}
			defer resp.Body.Close()
			_, err = ioutil.ReadAll(resp.Body)
			if err != nil {
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
	for _, numTest := range testCounts {
		fmt.Printf("Running tests with %d requests:\n", numTest)
		testLoad(soapActions["usuarios"], "Usuarios", numTest)
		testLoad(soapActions["musicas"], "Musicas", numTest)
		testLoad(soapActions["playlists"], "Playlists", numTest)
	}
}
