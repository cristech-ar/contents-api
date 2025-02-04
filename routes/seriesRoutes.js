const express = require('express');
const { getSeries, getEpisodeInfo, addSerie } = require('../controllers/seriesController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

/**
 * @swagger
 * /v1/series:
 *   get:
 *     summary: Retrieve a list of TV series.
 *     tags: [Series]
 *     responses:
 *       200:
 *         description: A list of TV series.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Series'
 */
router.get('/', authenticate, getSeries);

/**
 * @swagger
 * /v1/Series:
 *   post:
 *     summary: Add a new serie.
 *     tags: [Series]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Serie'
 *     responses:
 *       201:
 *         description: Serie created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Serie'
 */
router.post('/', authenticate, addSerie);

/**
 * @swagger
 * /v1/series/{seriesId}/seasons/{seasonNumber}/episodes/{episodeNumber}:
 *   get:
 *     summary: Retrieve information about a specific episode.
 *     tags: [Series]
 *     parameters:
 *       - in: path
 *         name: seriesId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the series.
 *       - in: path
 *         name: seasonNumber
 *         required: true
 *         schema:
 *           type: integer
 *         description: The season number.
 *       - in: path
 *         name: episodeNumber
 *         required: true
 *         schema:
 *           type: integer
 *         description: The episode number.
 *     responses:
 *       200:
 *         description: Episode information retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Episode'
 */
router.get('/:seriesId/seasons/:seasonNumber/episodes/:episodeNumber', authenticate, getEpisodeInfo);

module.exports = router;