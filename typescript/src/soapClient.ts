import * as soap from "soap";
import { performance } from "perf_hooks";

const baseURL = "http://127.0.0.1:5001/wsdl?wsdl"; // URL do WSDL do serviço SOAP
const testCounts = [100, 200, 300];

const soapClient = async () => {
  return new Promise<soap.Client>((resolve, reject) => {
    soap.createClient(baseURL, (err, client) => {
      if (err) reject(err);
      else resolve(client);
    });
  });
};

async function testLoad(
  client: soap.Client,
  method: string,
  args: object,
  name: string,
  numTest: number
) {
  const start = performance.now();

  for (let i = 0; i < numTest; i++) {
    await new Promise<void>((resolve, reject) => {
      client[method](args, (err: any, result: any) => {
        if (err) {
          console.error(`Error: ${err.message}`);
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  const end = performance.now();
  console.log(
    `${name} load test with ${numTest} requests completed in ${
      (end - start) / 1000
    } seconds`
  );
}

export async function runTests() {
  const client = await soapClient();

  for (let numTest of testCounts) {
    console.log(`Running tests with ${numTest} requests:`);

    await testLoad(client, "ler_usuarios", {}, "Usuarios", numTest);

    await testLoad(client, "ler_musicas", {}, "Musicas", numTest);

    await testLoad(
      client,
      "listar_playlists_usuario",
      { usuario_id: 1 },
      "Playlists",
      numTest
    );
  }
}
