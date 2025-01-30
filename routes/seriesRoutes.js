const express = require('express');
const { getSeries, getEpisodeInfo } = require('../controllers/seriesController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/series', authenticate, getSeries);
router.get('/series/:seriesId/seasons/:seasonNumber/episodes/:episodeNumber', authenticate, getEpisodeInfo);

module.exports = router;