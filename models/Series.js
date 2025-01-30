const mongoose = require('mongoose');

const episodeSchema = new mongoose.Schema({
  episodeNumber: { type: Number, required: true },
  title: { type: String, required: true },
  summary: { type: String, required: true },
  director: { type: String, required: true },
  actors: { type: [String], required: true },
});

const seasonSchema = new mongoose.Schema({
  seasonNumber: { type: Number, required: true },
  episodes: [episodeSchema],
});

const seriesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  seasons: [seasonSchema],
  description:{ type: String, required: true }
});

const Series = mongoose.model('Series', seriesSchema);

module.exports = Series;