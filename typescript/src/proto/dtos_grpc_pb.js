// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_dtos_pb = require('../proto/dtos_pb.js');

function serialize_musica_app_Empty(arg) {
  if (!(arg instanceof proto_dtos_pb.Empty)) {
    throw new Error('Expected argument of type musica_app.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_musica_app_Empty(buffer_arg) {
  return proto_dtos_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_musica_app_Musica(arg) {
  if (!(arg instanceof proto_dtos_pb.Musica)) {
    throw new Error('Expected argument of type musica_app.Musica');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_musica_app_Musica(buffer_arg) {
  return proto_dtos_pb.Musica.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_musica_app_MusicaID(arg) {
  if (!(arg instanceof proto_dtos_pb.MusicaID)) {
    throw new Error('Expected argument of type musica_app.MusicaID');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_musica_app_MusicaID(buffer_arg) {
  return proto_dtos_pb.MusicaID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_musica_app_MusicaList(arg) {
  if (!(arg instanceof proto_dtos_pb.MusicaList)) {
    throw new Error('Expected argument of type musica_app.MusicaList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_musica_app_MusicaList(buffer_arg) {
  return proto_dtos_pb.MusicaList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_musica_app_Playlist(arg) {
  if (!(arg instanceof proto_dtos_pb.Playlist)) {
    throw new Error('Expected argument of type musica_app.Playlist');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_musica_app_Playlist(buffer_arg) {
  return proto_dtos_pb.Playlist.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_musica_app_PlaylistID(arg) {
  if (!(arg instanceof proto_dtos_pb.PlaylistID)) {
    throw new Error('Expected argument of type musica_app.PlaylistID');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_musica_app_PlaylistID(buffer_arg) {
  return proto_dtos_pb.PlaylistID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_musica_app_PlaylistList(arg) {
  if (!(arg instanceof proto_dtos_pb.PlaylistList)) {
    throw new Error('Expected argument of type musica_app.PlaylistList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_musica_app_PlaylistList(buffer_arg) {
  return proto_dtos_pb.PlaylistList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_musica_app_Resposta(arg) {
  if (!(arg instanceof proto_dtos_pb.Resposta)) {
    throw new Error('Expected argument of type musica_app.Resposta');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_musica_app_Resposta(buffer_arg) {
  return proto_dtos_pb.Resposta.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_musica_app_Usuario(arg) {
  if (!(arg instanceof proto_dtos_pb.Usuario)) {
    throw new Error('Expected argument of type musica_app.Usuario');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_musica_app_Usuario(buffer_arg) {
  return proto_dtos_pb.Usuario.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_musica_app_UsuarioID(arg) {
  if (!(arg instanceof proto_dtos_pb.UsuarioID)) {
    throw new Error('Expected argument of type musica_app.UsuarioID');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_musica_app_UsuarioID(buffer_arg) {
  return proto_dtos_pb.UsuarioID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_musica_app_UsuarioList(arg) {
  if (!(arg instanceof proto_dtos_pb.UsuarioList)) {
    throw new Error('Expected argument of type musica_app.UsuarioList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_musica_app_UsuarioList(buffer_arg) {
  return proto_dtos_pb.UsuarioList.deserializeBinary(new Uint8Array(buffer_arg));
}


var UsuarioServiceService = exports.UsuarioServiceService = {
  criarUsuario: {
    path: '/musica_app.UsuarioService/CriarUsuario',
    requestStream: false,
    responseStream: false,
    requestType: proto_dtos_pb.Usuario,
    responseType: proto_dtos_pb.Resposta,
    requestSerialize: serialize_musica_app_Usuario,
    requestDeserialize: deserialize_musica_app_Usuario,
    responseSerialize: serialize_musica_app_Resposta,
    responseDeserialize: deserialize_musica_app_Resposta,
  },
  lerUsuario: {
    path: '/musica_app.UsuarioService/LerUsuario',
    requestStream: false,
    responseStream: false,
    requestType: proto_dtos_pb.UsuarioID,
    responseType: proto_dtos_pb.Usuario,
    requestSerialize: serialize_musica_app_UsuarioID,
    requestDeserialize: deserialize_musica_app_UsuarioID,
    responseSerialize: serialize_musica_app_Usuario,
    responseDeserialize: deserialize_musica_app_Usuario,
  },
  atualizarUsuario: {
    path: '/musica_app.UsuarioService/AtualizarUsuario',
    requestStream: false,
    responseStream: false,
    requestType: proto_dtos_pb.Usuario,
    responseType: proto_dtos_pb.Resposta,
    requestSerialize: serialize_musica_app_Usuario,
    requestDeserialize: deserialize_musica_app_Usuario,
    responseSerialize: serialize_musica_app_Resposta,
    responseDeserialize: deserialize_musica_app_Resposta,
  },
  deletarUsuario: {
    path: '/musica_app.UsuarioService/DeletarUsuario',
    requestStream: false,
    responseStream: false,
    requestType: proto_dtos_pb.UsuarioID,
    responseType: proto_dtos_pb.Resposta,
    requestSerialize: serialize_musica_app_UsuarioID,
    requestDeserialize: deserialize_musica_app_UsuarioID,
    responseSerialize: serialize_musica_app_Resposta,
    responseDeserialize: deserialize_musica_app_Resposta,
  },
  lerUsuarios: {
    path: '/musica_app.UsuarioService/LerUsuarios',
    requestStream: false,
    responseStream: false,
    requestType: proto_dtos_pb.Empty,
    responseType: proto_dtos_pb.UsuarioList,
    requestSerialize: serialize_musica_app_Empty,
    requestDeserialize: deserialize_musica_app_Empty,
    responseSerialize: serialize_musica_app_UsuarioList,
    responseDeserialize: deserialize_musica_app_UsuarioList,
  },
};

exports.UsuarioServiceClient = grpc.makeGenericClientConstructor(UsuarioServiceService);
var MusicaServiceService = exports.MusicaServiceService = {
  criarMusica: {
    path: '/musica_app.MusicaService/CriarMusica',
    requestStream: false,
    responseStream: false,
    requestType: proto_dtos_pb.Musica,
    responseType: proto_dtos_pb.Resposta,
    requestSerialize: serialize_musica_app_Musica,
    requestDeserialize: deserialize_musica_app_Musica,
    responseSerialize: serialize_musica_app_Resposta,
    responseDeserialize: deserialize_musica_app_Resposta,
  },
  lerMusica: {
    path: '/musica_app.MusicaService/LerMusica',
    requestStream: false,
    responseStream: false,
    requestType: proto_dtos_pb.MusicaID,
    responseType: proto_dtos_pb.Musica,
    requestSerialize: serialize_musica_app_MusicaID,
    requestDeserialize: deserialize_musica_app_MusicaID,
    responseSerialize: serialize_musica_app_Musica,
    responseDeserialize: deserialize_musica_app_Musica,
  },
  atualizarMusica: {
    path: '/musica_app.MusicaService/AtualizarMusica',
    requestStream: false,
    responseStream: false,
    requestType: proto_dtos_pb.Musica,
    responseType: proto_dtos_pb.Resposta,
    requestSerialize: serialize_musica_app_Musica,
    requestDeserialize: deserialize_musica_app_Musica,
    responseSerialize: serialize_musica_app_Resposta,
    responseDeserialize: deserialize_musica_app_Resposta,
  },
  deletarMusica: {
    path: '/musica_app.MusicaService/DeletarMusica',
    requestStream: false,
    responseStream: false,
    requestType: proto_dtos_pb.MusicaID,
    responseType: proto_dtos_pb.Resposta,
    requestSerialize: serialize_musica_app_MusicaID,
    requestDeserialize: deserialize_musica_app_MusicaID,
    responseSerialize: serialize_musica_app_Resposta,
    responseDeserialize: deserialize_musica_app_Resposta,
  },
  lerMusicas: {
    path: '/musica_app.MusicaService/LerMusicas',
    requestStream: false,
    responseStream: false,
    requestType: proto_dtos_pb.Empty,
    responseType: proto_dtos_pb.MusicaList,
    requestSerialize: serialize_musica_app_Empty,
    requestDeserialize: deserialize_musica_app_Empty,
    responseSerialize: serialize_musica_app_MusicaList,
    responseDeserialize: deserialize_musica_app_MusicaList,
  },
};

exports.MusicaServiceClient = grpc.makeGenericClientConstructor(MusicaServiceService);
var PlaylistServiceService = exports.PlaylistServiceService = {
  criarPlaylist: {
    path: '/musica_app.PlaylistService/CriarPlaylist',
    requestStream: false,
    responseStream: false,
    requestType: proto_dtos_pb.Playlist,
    responseType: proto_dtos_pb.Resposta,
    requestSerialize: serialize_musica_app_Playlist,
    requestDeserialize: deserialize_musica_app_Playlist,
    responseSerialize: serialize_musica_app_Resposta,
    responseDeserialize: deserialize_musica_app_Resposta,
  },
  listarPlaylistsPorUsuario: {
    path: '/musica_app.PlaylistService/ListarPlaylistsPorUsuario',
    requestStream: false,
    responseStream: false,
    requestType: proto_dtos_pb.UsuarioID,
    responseType: proto_dtos_pb.PlaylistList,
    requestSerialize: serialize_musica_app_UsuarioID,
    requestDeserialize: deserialize_musica_app_UsuarioID,
    responseSerialize: serialize_musica_app_PlaylistList,
    responseDeserialize: deserialize_musica_app_PlaylistList,
  },
  listarMusicasPorPlaylist: {
    path: '/musica_app.PlaylistService/ListarMusicasPorPlaylist',
    requestStream: false,
    responseStream: false,
    requestType: proto_dtos_pb.PlaylistID,
    responseType: proto_dtos_pb.MusicaList,
    requestSerialize: serialize_musica_app_PlaylistID,
    requestDeserialize: deserialize_musica_app_PlaylistID,
    responseSerialize: serialize_musica_app_MusicaList,
    responseDeserialize: deserialize_musica_app_MusicaList,
  },
  listarPlaylistsPorMusica: {
    path: '/musica_app.PlaylistService/ListarPlaylistsPorMusica',
    requestStream: false,
    responseStream: false,
    requestType: proto_dtos_pb.MusicaID,
    responseType: proto_dtos_pb.PlaylistList,
    requestSerialize: serialize_musica_app_MusicaID,
    requestDeserialize: deserialize_musica_app_MusicaID,
    responseSerialize: serialize_musica_app_PlaylistList,
    responseDeserialize: deserialize_musica_app_PlaylistList,
  },
  lerPlaylist: {
    path: '/musica_app.PlaylistService/LerPlaylist',
    requestStream: false,
    responseStream: false,
    requestType: proto_dtos_pb.PlaylistID,
    responseType: proto_dtos_pb.Playlist,
    requestSerialize: serialize_musica_app_PlaylistID,
    requestDeserialize: deserialize_musica_app_PlaylistID,
    responseSerialize: serialize_musica_app_Playlist,
    responseDeserialize: deserialize_musica_app_Playlist,
  },
  lerPlaylists: {
    path: '/musica_app.PlaylistService/LerPlaylists',
    requestStream: false,
    responseStream: false,
    requestType: proto_dtos_pb.Empty,
    responseType: proto_dtos_pb.PlaylistList,
    requestSerialize: serialize_musica_app_Empty,
    requestDeserialize: deserialize_musica_app_Empty,
    responseSerialize: serialize_musica_app_PlaylistList,
    responseDeserialize: deserialize_musica_app_PlaylistList,
  },
  atualizarPlaylist: {
    path: '/musica_app.PlaylistService/AtualizarPlaylist',
    requestStream: false,
    responseStream: false,
    requestType: proto_dtos_pb.Playlist,
    responseType: proto_dtos_pb.Resposta,
    requestSerialize: serialize_musica_app_Playlist,
    requestDeserialize: deserialize_musica_app_Playlist,
    responseSerialize: serialize_musica_app_Resposta,
    responseDeserialize: deserialize_musica_app_Resposta,
  },
  deletarPlaylist: {
    path: '/musica_app.PlaylistService/DeletarPlaylist',
    requestStream: false,
    responseStream: false,
    requestType: proto_dtos_pb.PlaylistID,
    responseType: proto_dtos_pb.Resposta,
    requestSerialize: serialize_musica_app_PlaylistID,
    requestDeserialize: deserialize_musica_app_PlaylistID,
    responseSerialize: serialize_musica_app_Resposta,
    responseDeserialize: deserialize_musica_app_Resposta,
  },
};

exports.PlaylistServiceClient = grpc.makeGenericClientConstructor(PlaylistServiceService);
