const dotenv = require('dotenv');
const path = require('path');

// Ensure dotenv loads from server/.env if not already loaded
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const requiredEnvVars = ['JWT_SECRET', 'MONGODB_URI'];

const missingEnvVars = requiredEnvVars.filter((varName) => !process.env[varName]);

if (missingEnvVars.length > 0) {
  console.error(`[FATAL] Missing required environment variables: ${missingEnvVars.join(', ')}`);
  console.error('[FATAL] Please check your .env file or reference .env.example.');
  process.exit(1);
}

const config = {
  env: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  port: parseInt(process.env.PORT, 10) || 5000,
  mongodbUri: process.env.MONGODB_URI,
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    cookieExpiresDays: parseInt(process.env.COOKIE_EXPIRES_DAYS, 10) || 7,
  },
  clientUrl: process.env.CLIENT_URL || 'http://localhost:5173',
  adminSeed: {
    name: process.env.ADMIN_NAME || 'ShopEase Admin',
    email: process.env.ADMIN_EMAIL || 'admin@shopease.com',
    password: process.env.ADMIN_PASSWORD || 'AdminPass123!',
  },
};

module.exports = config;
