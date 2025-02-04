const express = require('express');
const { getActors, addActor } = require('../controllers/actorController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

/**
 * @swagger
 * /v1/actors:
 *   get:
 *     summary: Retrieve a list of actors.
 *     tags: [Actors]
 *     responses:
 *       200:
 *         description: A list of actors.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Actor'
 */
router.get('/', authenticate, getActors);

/**
 * @swagger
 * /v1/actors:
 *   post:
 *     summary: Add a new actor.
 *     tags: [Actors]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Actor'
 *     responses:
 *       201:
 *         description: Actor created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Actor'
 */
router.post('/', authenticate, addActor);

module.exports = router;