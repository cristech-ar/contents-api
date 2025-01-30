const Actor = require('../models/Actor');

const getActors = async (req, res) => {
  try {
    const actors = await Actor.find().populate('movies series');
    res.json(actors);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching actors', error });
  }
};

const addActor = async (req, res) => {
  try {
    const actor = new Actor(req.body);
    await actor.save();
    res.status(201).json(actor);
  } catch (error) {
    res.status(400).json({ message: 'Error creating actor', error });
  }
};

module.exports = { getActors, addActor };