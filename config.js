// config.js
require('dotenv').config();

// Aktif otel ID'sini ortam değişkeninden al, varsayılan olarak 'hotel1'
const activeHotelId = process.env.HOTEL_ID || 'hotel1';

// Konfigürasyon objesi
const config = {
  // MongoDB Bağlantı Bilgileri
  mongodbUri: process.env.MONGODB_URI || 'mongodb+srv://nihatsaydam13131:nihat1234@keepsty.hrq40.mongodb.net/GreenP?retryWrites=true&w=majority&appName=Keepsty',

  // SMTP Ayarları
  smtp: {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 465,
    secure: process.env.SMTP_SECURE !== 'false', // Varsayılan olarak true
    user: process.env.SMTP_USER || 'nihatsaydam13131@gmail.com', // E-posta adresinizi buraya yazın
    pass: process.env.SMTP_PASS || 'jgmp pons oxpc saxl', // Uygulama şifrenizi buraya yazın
  },

  // E-posta ayarları
  email: {
    fromName: process.env.EMAIL_FROM_NAME || `GreenP Notifications`,
    recipients: process.env.NOTIFICATION_EMAILS ? 
      process.env.NOTIFICATION_EMAILS.split(',') : 
      ['nihatsaydam13131@gmail.com'], // Bildirim alacak e-postalar
  },

  // Otel bilgileri
  hotel: {
    name: process.env.HOTEL_NAME || 'GreenP',
    id: activeHotelId,
  },

  // Server ayarları
  port: process.env.PORT || 3000,
};

module.exports = config; 