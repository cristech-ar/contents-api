const express = require('express');
const { getActors, addActor } = require('../controllers/actorController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authenticate, getActors);
router.post('/', authenticate, addActor);

module.exports = router;