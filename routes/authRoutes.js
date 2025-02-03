const express = require('express');
const { generateToken, refreshToken } = require('../controllers/authController');

const router = express.Router();

/**
 * @swagger
 * /auth/generate-token:
 *   get:
 *     summary: Generate a JWT token and a refresh token.
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Tokens generated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token.
 *                 refreshToken:
 *                   type: string
 *                   description: Refresh token.
 */
router.get('/generate-token', generateToken);
/**
 * @swagger
 * /auth/refresh-token:
 *   post:
 *     summary: Refresh an expired JWT token using a refresh token.
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                 type: string
 *                 description: The refresh token.
 *     responses:
 *       200:
 *         description: Token refreshed successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: New JWT token.
 */

router.post('/refresh-token', refreshToken);

module.exports = router;