const mongoose = require('mongoose');
const config = require('./env');

// Utility to mask MongoDB URI credentials for safe logging
const maskUri = (uri) => {
  try {
    return uri.replace(/\/\/[^:]+:[^@]+@/, '//***:***@');
  } catch {
    return 'mongodb://[masked]';
  }
};

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.mongodbUri, {
      autoIndex: true, // Build indexes in development
    });

    console.log(`[Database] MongoDB connected successfully: ${conn.connection.host}/${conn.connection.name}`);
    console.log(`[Database] Endpoint: ${maskUri(config.mongodbUri)}`);
    return conn;
  } catch (error) {
    console.error(`[Database Error] Connection failed: ${error.message}`);
    // Do not crash silently or fall back to mock data
    process.exit(1);
  }
};

mongoose.connection.on('disconnected', () => {
  console.warn('[Database] MongoDB connection disconnected.');
});

mongoose.connection.on('reconnected', () => {
  console.log('[Database] MongoDB reconnected.');
});

mongoose.connection.on('error', (err) => {
  console.error(`[Database Error] Mongoose runtime error: ${err.message}`);
});

const disconnectDB = async () => {
  try {
    await mongoose.connection.close();
    console.log('[Database] MongoDB connection closed gracefully.');
  } catch (error) {
    console.error(`[Database Error] Error during disconnection: ${error.message}`);
  }
};

module.exports = {
  connectDB,
  disconnectDB,
};
