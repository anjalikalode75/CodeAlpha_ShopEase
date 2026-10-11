const app = require('./app');
const config = require('./config/env');
const { connectDB, disconnectDB } = require('./config/db');

// Catch uncaught exceptions early
process.on('uncaughtException', (err) => {
  console.error('[FATAL] Uncaught Exception:', err.message);
  console.error(err.stack);
  process.exit(1);
});

let server;

const startServer = async () => {
  // Connect to MongoDB
  await connectDB();

  server = app.listen(config.port, () => {
    console.log(`[ShopEase Server] Running in ${config.env} mode on port ${config.port}`);
    console.log(`[ShopEase Server] Health check: http://localhost:${config.port}/api/v1/health`);
  });
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('[FATAL] Unhandled Rejection:', err.message);
  if (server) {
    server.close(() => process.exit(1));
  } else {
    process.exit(1);
  }
});

// Graceful shutdown on termination signals
const handleGracefulShutdown = async (signal) => {
  console.log(`\n[ShopEase Server] Received ${signal}. Shutting down gracefully...`);
  if (server) {
    server.close(async () => {
      console.log('[ShopEase Server] HTTP server closed.');
      await disconnectDB();
      process.exit(0);
    });
  } else {
    await disconnectDB();
    process.exit(0);
  }
};

process.on('SIGTERM', () => handleGracefulShutdown('SIGTERM'));
process.on('SIGINT', () => handleGracefulShutdown('SIGINT'));

startServer();
