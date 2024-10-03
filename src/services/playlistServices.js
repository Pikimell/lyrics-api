import { PlaylistCollection } from '../db/models/playlist.js';

export const createPlayListService = async (data) => {
  return await PlaylistCollection.create(data);
};

export const updatePlayListService = async (id, data) => {
  const playlist = await PlaylistCollection.findById(id);

  if (!playlist) {
    throw new Error('Playlist not found');
  }

  Object.assign(playlist, data, { updatedAt: new Date() });

  await playlist.save();
  return playlist;
};

export const deletePlayListService = async (id) => {
  const playlist = await PlaylistCollection.findByIdAndDelete(id);

  if (!playlist) {
    throw new Error('Playlist not found');
  }
};

export const getPlayListService = async (id) => {
  const playlist = await PlaylistCollection.findById(id);

  if (!playlist) {
    throw new Error('Playlist not found');
  }

  return playlist;
};

export const listPlayListsService = async (userId) => {
  const playlists = await PlaylistCollection.find({ owner: userId });
  return playlists;
};
