// config.js
require('dotenv').config();

// Farklı oteller için farklı yapılandırma dosyaları
const hotels = {
  hotel1: {
    name: 'Hotel 54',
    mongodb: 'mongodb+srv://username1:password1@cluster.mongodb.net/Hotel54?retryWrites=true&w=majority',
    emails: 'info@hotel54.com,manager@hotel54.com',
    smtpUser: 'hotel54@gmail.com',
    smtpPass: 'app_password_for_hotel54',
  },
  hotel2: {
    name: 'Hotel Grand',
    mongodb: 'mongodb+srv://username2:password2@cluster.mongodb.net/HotelGrand?retryWrites=true&w=majority',
    emails: 'info@hotelgrand.com,manager@hotelgrand.com',
    smtpUser: 'hotelgrand@gmail.com',
    smtpPass: 'app_password_for_hotelgrand',
  }
  // Yeni otel eklemek için buraya ilave yapılabilir
};

// Aktif otel ID'sini ortam değişkeninden al, yoksa hotel1'i kullan
const activeHotelId = process.env.HOTEL_ID || 'hotel1';

// Aktif otelin ayarlarını al
const activeHotel = hotels[activeHotelId] || hotels.hotel1;

// Konfigürasyon objesi
const config = {
  // MongoDB Bağlantı Bilgileri
  mongodbUri: process.env.MONGODB_URI || activeHotel.mongodb,

  // SMTP Ayarları
  smtp: {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 465,
    secure: process.env.SMTP_SECURE !== 'false', // Varsayılan olarak true
    user: process.env.SMTP_USER || activeHotel.smtpUser,
    pass: process.env.SMTP_PASS || activeHotel.smtpPass,
  },

  // E-posta ayarları
  email: {
    fromName: process.env.EMAIL_FROM_NAME || `${activeHotel.name} Notification`,
    recipients: process.env.NOTIFICATION_EMAILS ? 
      process.env.NOTIFICATION_EMAILS.split(',') : 
      activeHotel.emails.split(','),
  },

  // Otel bilgileri
  hotel: {
    name: process.env.HOTEL_NAME || activeHotel.name,
    id: activeHotelId,
  },

  // Server ayarları
  port: process.env.PORT || 3000,
};

module.exports = config; 