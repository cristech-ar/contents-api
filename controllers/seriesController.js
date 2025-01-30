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

module.exports = { getSeries, getEpisodeInfo };