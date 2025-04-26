// config.js
require('dotenv').config();

// Aktif otel ID'sini ortam değişkeninden al
const activeHotelId = process.env.HOTEL_ID || 'hotel1';

// Konfigürasyon objesi
const config = {
  // MongoDB Bağlantı Bilgileri
  mongodbUri: process.env.MONGODB_URI,

  // SMTP Ayarları
  smtp: {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 465,
    secure: process.env.SMTP_SECURE !== 'false', // Varsayılan olarak true
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },

  // E-posta ayarları
  email: {
    fromName: process.env.EMAIL_FROM_NAME || `Hotel Notification`,
    recipients: process.env.NOTIFICATION_EMAILS ? 
      process.env.NOTIFICATION_EMAILS.split(',') : 
      [],
  },

  // Otel bilgileri
  hotel: {
    name: process.env.HOTEL_NAME || 'Hotel',
    id: activeHotelId,
  },

  // Server ayarları
  port: process.env.PORT || 3000,
};

module.exports = config; 