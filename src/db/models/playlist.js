import { model, Schema } from 'mongoose';
const playlistSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      default: [],
    },
    owner: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  {
    versionKey: false,
  },
);

export const PlaylistCollection = model('playlist', playlistSchema);
