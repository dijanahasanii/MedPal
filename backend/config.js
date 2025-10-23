// Database configuration
const config = {
  // Use MongoDB Atlas connection string
  // Support both MONGODB_URI and MONGO_URI for flexibility
  MONGODB_URI: process.env.MONGODB_URI || process.env.MONGO_URI || "mongodb+srv://medpal:medpal2024@cluster0.mongodb.net/medpal?retryWrites=true&w=majority&appName=Cluster0",
  
  // JWT Secret
  JWT_SECRET: process.env.JWT_SECRET || "medpal_super_secret_key_2024_secure_token",
  
  // Server Port
  PORT: process.env.PORT || 5000,
  
  // Email configuration
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
  
  // Client URL
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:3000",
  
  // Admin Secret
  ADMIN_SECRET: process.env.ADMIN_SECRET || "admin123"
};

module.exports = config;
