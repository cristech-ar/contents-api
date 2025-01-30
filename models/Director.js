const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
  series: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Series' }],
});

const Director = mongoose.model('Director', directorSchema);

module.exports = Director;