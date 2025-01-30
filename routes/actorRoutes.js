const express = require('express');
const { getActors, addActor } = require('../controllers/actorController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/actors', authenticate, getActors);
router.post('/actors', authenticate, addActor);

module.exports = router;