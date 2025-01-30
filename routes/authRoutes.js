const express = require('express');
const { generateToken, refreshToken } = require('../controllers/authController');

const router = express.Router();

router.get('/generate-token', generateToken);


router.post('/refresh-token', refreshToken);

module.exports = router;