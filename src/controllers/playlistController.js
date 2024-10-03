import { response } from '../helpers/response.js';
import {
  createPlayListService,
  updatePlayListService,
  deletePlayListService,
  getPlayListService,
  listPlayListsService,
} from '../services/playlistServices.js';

export const createPlaylistController = async (event, context) => {
  const data = JSON.parse(event.body);

  const result = await createPlayListService(data);
  return response(200)(result);
};

export const updatePlaylistController = async (event, context) => {
  const { id } = event.pathParameters;
  const data = JSON.parse(event.body);

  const result = await updatePlayListService(id, data);
  return response(200)(result);
};

export const deletePlaylistController = async (event, context) => {
  const { id } = event.pathParameters;

  await deletePlayListService(id);
  return response(204)();
};

export const getPlaylistController = async (event, context) => {
  const { id } = event.pathParameters;

  const result = await getPlayListService(id);
  return response(200)(result);
};

export const listPlaylistsController = async (event, context) => {
  const { userId } = event.queryStringParameters || {};
  const result = await listPlayListsService(userId);
  return response(200)(result);
};
