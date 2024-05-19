import * as mongoose from 'mongoose';

export const VideoSchema = new mongoose.Schema({
  title: String,
  url: String,
  choices: [String],
});
