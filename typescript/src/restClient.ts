import { performance } from "perf_hooks";
import axios from "axios";

const baseURL = "http://localhost:5000";

const testCounts = [100, 200, 300];

const endpoints = {
  usuarios: "/usuarios",
  musicas: "/musicas",
  playlists: "/playlists",
};

async function testLoad(endpoint: string, name: string, numTest: number) {
  const url = `${baseURL}${endpoint}`;
  const start = performance.now();

  for (let i = 0; i < numTest; i++) {
    await axios
      .get(url)
      .catch((error) => console.error(`Error: ${error.message}`));
  }

  const end = performance.now();
  console.log(
    `${name} load test with ${numTest} requests completed in ${
      (end - start) / 1000
    } seconds`
  );
}

export async function runTests() {
  for (let numTest of testCounts) {
    console.log(`Running tests with ${numTest} requests:`);
    await testLoad(endpoints.usuarios, "Usuarios", numTest);
    await testLoad(endpoints.musicas, "Musicas", numTest);
    await testLoad(endpoints.playlists, "Playlists", numTest);
  }
}
