const mongoose = require('mongoose');

const readyStateMap = {
  0: 'disconnected',
  1: 'connected',
  2: 'connecting',
  3: 'disconnecting',
};

/**
 * Health check handler returning server health and database status
 * @route GET /api/health or GET /api/v1/health
 */
const getHealth = (req, res) => {
  const dbState = mongoose.connection.readyState;
  const dbStatus = readyStateMap[dbState] || 'unknown';
  const isHealthy = dbState === 1;

  res.status(isHealthy ? 200 : 503).json({
    success: isHealthy,
    message: isHealthy
      ? 'ShopEase API is running normally'
      : 'ShopEase API database service unavailable',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    database: {
      status: dbStatus,
      name: mongoose.connection.name || null,
    },
  });
};

module.exports = {
  getHealth,
};
