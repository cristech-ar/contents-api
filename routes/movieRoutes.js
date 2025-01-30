const express = require('express');
const { getMovies, addMovie } = require('../controllers/movieController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/movies', authenticate, getMovies,console.log('entra'));
router.post('/movies', authenticate, addMovie);

module.exports = router;