import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { performance } from "perf_hooks";
import { Empty } from "./proto/dtos_pb";
import path from "path";

const testCounts = [100, 200, 300];

const PROTO_PATH = path.join(__dirname, "proto/dtos.proto");
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition) as any;
const musicaAppProto = protoDescriptor.musica_app;

async function testLoad(
  client: any,
  method: string,
  args: any,
  name: string,
  numTest: number
) {
  const start = performance.now();

  for (let i = 0; i < numTest; i++) {
    await new Promise<void>((resolve, reject) => {
      client[method](args, (error: grpc.ServiceError, response: any) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  const end = performance.now();
  console.log(`${name} : ${(end - start) / 1000} seconds`);
}

export async function runTests() {
  const clientUsuario = new musicaAppProto.UsuarioService(
    "localhost:5003",
    grpc.credentials.createInsecure()
  );
  const clientMusica = new musicaAppProto.MusicaService(
    "localhost:5003",
    grpc.credentials.createInsecure()
  );
  const clientPlaylist = new musicaAppProto.PlaylistService(
    "localhost:5003",
    grpc.credentials.createInsecure()
  );

  for (let numTest of testCounts) {
    console.log(`${numTest} requests:`);

    await testLoad(
      clientUsuario,
      "LerUsuarios",
      new Empty(),
      "Usuarios",
      numTest
    );

    await testLoad(clientMusica, "LerMusicas", new Empty(), "Musicas", numTest);

    await testLoad(
      clientPlaylist,
      "LerPlaylists",
      { usuario_id: 1 },
      "Playlists",
      numTest
    );
  }
}
