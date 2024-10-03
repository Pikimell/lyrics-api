import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  createPlaylistController,
  updatePlaylistController,
  deletePlaylistController,
  getPlaylistController,
  listPlaylistsController,
} from '../controllers/playlistController.js';

export const createPlaylistHandler = async (event, context) => {
  const ctrl = ctrlWrapper(createPlaylistController);
  return await ctrl(event, context);
};

export const updatePlaylistHandler = async (event, context) => {
  const ctrl = ctrlWrapper(updatePlaylistController);
  return await ctrl(event, context);
};

export const deletePlaylistHandler = async (event, context) => {
  const ctrl = ctrlWrapper(deletePlaylistController);
  return await ctrl(event, context);
};

export const getPlaylistHandler = async (event, context) => {
  const ctrl = ctrlWrapper(getPlaylistController);
  return await ctrl(event, context);
};

export const listPlaylistsHandler = async (event, context) => {
  const ctrl = ctrlWrapper(listPlaylistsController);
  return await ctrl(event, context);
};
