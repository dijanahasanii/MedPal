const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const config = require('./config');
const mongoUri = config.MONGODB_URI;

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log('📊 Using existing MongoDB connection');
    return;
  }

  try {
    console.log('🔍 Attempting to connect to MongoDB...');
    console.log('🔗 MongoDB URI:', mongoUri.replace(/\/\/([^:]+):([^@]+)@/, '//$1:****@'));
    
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    
    isConnected = true;
    console.log('✅ MongoDB connected successfully!');
    console.log('📊 Database:', mongoose.connection.name);
    
    // Handle connection events
    mongoose.connection.on('error', (err) => {
      console.error('❌ MongoDB connection error:', err);
    });
    
    mongoose.connection.on('disconnected', () => {
      console.warn('⚠️ MongoDB disconnected');
      isConnected = false;
    });
    
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    console.error('💡 Please check your MongoDB Atlas connection string');
    console.error('🔗 Get your connection string from: https://cloud.mongodb.com/');
    throw err;
  }
};

module.exports = connectDB;