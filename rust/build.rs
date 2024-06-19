fn main() {
    tonic_build::compile_protos("proto/dtos.proto").unwrap();
}
