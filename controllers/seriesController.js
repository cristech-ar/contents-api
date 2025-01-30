const Series = require('../models/Series');

const getSeries = async (req, res) => {
  try {
    const series = await Series.find();
    res.json(series);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching series', error });
  }
};

const getEpisodeInfo = async (req, res) => {
  try {
    const { seriesId, seasonNumber, episodeNumber } = req.params;
    const series = await Series.findById(seriesId);

    if (!series) {
      return res.status(404).json({ message: 'Series not found' });
    }

    const season = series.seasons.find(
      (s) => s.seasonNumber === parseInt(seasonNumber)
    );

    if (!season) {
      return res.status(404).json({ message: 'Season not found' });
    }

    const episode = season.episodes.find(
      (e) => e.episodeNumber === parseInt(episodeNumber)
    );

    if (!episode) {
      return res.status(404).json({ message: 'Episode not found' });
    }

    res.json(episode);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching episode info', error });
  }
};

const addSerie = async (req, res) => {
  try {
    const serie = new Series(req.body);
    await serie.save();
    res.status(201).json(serie);
  } catch (error) {
    res.status(400).json({ message: 'Error creating serie', error });
  }
};

module.exports = { getSeries, getEpisodeInfo, addSerie };