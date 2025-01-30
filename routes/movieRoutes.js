const express = require('express');
const { getMovies, addMovie } = require('../controllers/movieController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authenticate, getMovies);
router.post('/', authenticate, addMovie);

module.exports = router;