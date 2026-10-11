const express = require('express');
const { getHealth } = require('../controllers/healthController');

const router = express.Router();

// GET /api/health or GET /api/v1/health
router.get('/health', getHealth);

module.exports = router;
