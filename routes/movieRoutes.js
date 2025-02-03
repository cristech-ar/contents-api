const express = require('express');
const { getMovies, addMovie } = require('../controllers/movieController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

/**
 * @swagger
 * /v1/movies:
 *   get:
 *     summary: Retrieve a list of movies.
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: A list of movies.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 */
router.get('/', authenticate, getMovies);

/**
 * @swagger
 * /v1/movies:
 *   post:
 *     summary: Add a new movie.
 *     tags: [Movies]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       201:
 *         description: Movie created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 */
router.post('/', authenticate, addMovie);

module.exports = router;