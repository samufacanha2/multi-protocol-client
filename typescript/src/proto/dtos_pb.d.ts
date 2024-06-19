// package: musica_app
// file: proto/dtos.proto

import * as jspb from "google-protobuf";

export class Usuario extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getNome(): string;
  setNome(value: string): void;

  getIdade(): number;
  setIdade(value: number): void;

  clearPlaylistsList(): void;
  getPlaylistsList(): Array<number>;
  setPlaylistsList(value: Array<number>): void;
  addPlaylists(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Usuario.AsObject;
  static toObject(includeInstance: boolean, msg: Usuario): Usuario.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Usuario, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Usuario;
  static deserializeBinaryFromReader(message: Usuario, reader: jspb.BinaryReader): Usuario;
}

export namespace Usuario {
  export type AsObject = {
    id: number,
    nome: string,
    idade: number,
    playlistsList: Array<number>,
  }
}

export class Musica extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getNome(): string;
  setNome(value: string): void;

  getArtista(): string;
  setArtista(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Musica.AsObject;
  static toObject(includeInstance: boolean, msg: Musica): Musica.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Musica, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Musica;
  static deserializeBinaryFromReader(message: Musica, reader: jspb.BinaryReader): Musica;
}

export namespace Musica {
  export type AsObject = {
    id: number,
    nome: string,
    artista: string,
  }
}

export class Playlist extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getUsuarioId(): number;
  setUsuarioId(value: number): void;

  clearMusicasList(): void;
  getMusicasList(): Array<number>;
  setMusicasList(value: Array<number>): void;
  addMusicas(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Playlist.AsObject;
  static toObject(includeInstance: boolean, msg: Playlist): Playlist.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Playlist, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Playlist;
  static deserializeBinaryFromReader(message: Playlist, reader: jspb.BinaryReader): Playlist;
}

export namespace Playlist {
  export type AsObject = {
    id: number,
    usuarioId: number,
    musicasList: Array<number>,
  }
}

export class UsuarioID extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsuarioID.AsObject;
  static toObject(includeInstance: boolean, msg: UsuarioID): UsuarioID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsuarioID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsuarioID;
  static deserializeBinaryFromReader(message: UsuarioID, reader: jspb.BinaryReader): UsuarioID;
}

export namespace UsuarioID {
  export type AsObject = {
    id: number,
  }
}

export class MusicaID extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MusicaID.AsObject;
  static toObject(includeInstance: boolean, msg: MusicaID): MusicaID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MusicaID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MusicaID;
  static deserializeBinaryFromReader(message: MusicaID, reader: jspb.BinaryReader): MusicaID;
}

export namespace MusicaID {
  export type AsObject = {
    id: number,
  }
}

export class PlaylistID extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaylistID.AsObject;
  static toObject(includeInstance: boolean, msg: PlaylistID): PlaylistID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlaylistID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaylistID;
  static deserializeBinaryFromReader(message: PlaylistID, reader: jspb.BinaryReader): PlaylistID;
}

export namespace PlaylistID {
  export type AsObject = {
    id: number,
  }
}

export class Resposta extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Resposta.AsObject;
  static toObject(includeInstance: boolean, msg: Resposta): Resposta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Resposta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Resposta;
  static deserializeBinaryFromReader(message: Resposta, reader: jspb.BinaryReader): Resposta;
}

export namespace Resposta {
  export type AsObject = {
    message: string,
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class UsuarioList extends jspb.Message {
  clearUsuariosList(): void;
  getUsuariosList(): Array<Usuario>;
  setUsuariosList(value: Array<Usuario>): void;
  addUsuarios(value?: Usuario, index?: number): Usuario;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsuarioList.AsObject;
  static toObject(includeInstance: boolean, msg: UsuarioList): UsuarioList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsuarioList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsuarioList;
  static deserializeBinaryFromReader(message: UsuarioList, reader: jspb.BinaryReader): UsuarioList;
}

export namespace UsuarioList {
  export type AsObject = {
    usuariosList: Array<Usuario.AsObject>,
  }
}

export class MusicaList extends jspb.Message {
  clearMusicasList(): void;
  getMusicasList(): Array<Musica>;
  setMusicasList(value: Array<Musica>): void;
  addMusicas(value?: Musica, index?: number): Musica;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MusicaList.AsObject;
  static toObject(includeInstance: boolean, msg: MusicaList): MusicaList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MusicaList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MusicaList;
  static deserializeBinaryFromReader(message: MusicaList, reader: jspb.BinaryReader): MusicaList;
}

export namespace MusicaList {
  export type AsObject = {
    musicasList: Array<Musica.AsObject>,
  }
}

export class PlaylistList extends jspb.Message {
  clearPlaylistsList(): void;
  getPlaylistsList(): Array<Playlist>;
  setPlaylistsList(value: Array<Playlist>): void;
  addPlaylists(value?: Playlist, index?: number): Playlist;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaylistList.AsObject;
  static toObject(includeInstance: boolean, msg: PlaylistList): PlaylistList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlaylistList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaylistList;
  static deserializeBinaryFromReader(message: PlaylistList, reader: jspb.BinaryReader): PlaylistList;
}

export namespace PlaylistList {
  export type AsObject = {
    playlistsList: Array<Playlist.AsObject>,
  }
}

