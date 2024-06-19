import { performance } from "perf_hooks";
import { gql, request } from "graphql-request";

const baseURL = "http://127.0.0.1:5002/graphql";
const testCounts = [100, 200, 300];

const queries = {
  usuarios: gql`
    {
      usuarios {
        ID
        nome
      }
    }
  `,
  musicas: gql`
    {
      musicas {
        ID
        nome
      }
    }
  `,
  playlists: gql`
    {
      playlists {
        ID
        nome
      }
    }
  `,
};

async function testLoad(query: any, name: string, numTest: number) {
  const start = performance.now();

  for (let i = 0; i < numTest; i++) {
    await request(baseURL, query).catch((error) =>
      console.error(`Error: ${error.message}`)
    );
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
    await testLoad(queries.usuarios, "Usuarios", numTest);
    await testLoad(queries.musicas, "Musicas", numTest);
    await testLoad(queries.playlists, "Playlists", numTest);
  }
}
