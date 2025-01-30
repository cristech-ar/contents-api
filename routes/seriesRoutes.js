const express = require('express');
const { getSeries, getEpisodeInfo, addSerie } = require('../controllers/seriesController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authenticate, getSeries);
router.post('/', authenticate, addSerie);
router.get('/:seriesId/seasons/:seasonNumber/episodes/:episodeNumber', authenticate, getEpisodeInfo);

module.exports = router;