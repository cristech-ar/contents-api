const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
  series: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Series' }],
});

const Actor = mongoose.model('Actor', actorSchema);

module.exports = Actor;