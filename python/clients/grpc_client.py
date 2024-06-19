import grpc
import time

from clients.proto import dtos_pb2, dtos_pb2_grpc

TEST_COUNTS = [100, 200, 300]


def test_load(method, name, num_test):
    start = time.time()

    for i in range(num_test):
        try:
            response = method(dtos_pb2.Empty())  # type: ignore
        except grpc.RpcError as e:
            print(f"Request {i} failed: {e}")

    end = time.time()
    print(
        f"{name} load test with {num_test} requests completed in {end - start:.6f} seconds"
    )


def run_tests():
    channel = grpc.insecure_channel("localhost:5003")
    usuario_stub = dtos_pb2_grpc.UsuarioServiceStub(channel)
    musica_stub = dtos_pb2_grpc.MusicaServiceStub(channel)
    playlist_stub = dtos_pb2_grpc.PlaylistServiceStub(channel)

    for num_test in TEST_COUNTS:
        print(f"Running tests with {num_test} requests:")
        test_load(usuario_stub.LerUsuarios, "Usuarios", num_test)
        test_load(musica_stub.LerMusicas, "Musicas", num_test)
        test_load(playlist_stub.LerPlaylists, "Playlists", num_test)


if __name__ == "__main__":
    run_tests()
