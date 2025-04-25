# Otel Yönetim Sistemi

Bu proje, oteller için tasarlanmış bir API sunucusudur. Her otel için özelleştirilebilir yapılandırma özellikleri içerir.

## Özellikler

- Oda temizlik istekleri
- Chat/Concierge hizmetleri
- Room Service siparişleri
- Laundry (Çamaşırhane) hizmetleri
- Bellboy istekleri
- Şikayet yönetimi
- Çoklu otel desteği

## Kurulum

### Yerel Geliştirme Ortamı

1. Depoyu klonlayın:
   ```
   git clone <repo-url>
   cd otel-api
   ```

2. Bağımlılıkları yükleyin:
   ```
   npm install
   ```

3. `.env` dosyasını oluşturun:
   ```
   # MongoDB Bağlantı Bilgileri
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/DatabaseName

   # SMTP Mail Ayarları
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_USER=your@gmail.com
   SMTP_PASS=your_password

   # E-posta Bilgileri
   EMAIL_FROM_NAME=Hotel App
   NOTIFICATION_EMAILS=info@hotel.com,manager@hotel.com

   # Otel Bilgileri
   HOTEL_NAME=Hotel Name
   HOTEL_ID=hotel1

   # Server Ayarları
   PORT=3000
   ```

4. Uygulamayı başlatın:
   ```
   node server.js
   ```

### Google Cloud Deployment

Uygulama, Google Cloud'a otomatik olarak dağıtılabilir. Her otel için ayrı bir servis oluşturulur.

1. Google Cloud projenizi oluşturun
2. Servis hesabı anahtarı oluşturun ve GitHub Secrets'a ekleyin
3. Her otel için gerekli gizli bilgileri GitHub Secrets'a ekleyin:
   - `GCP_PROJECT_ID`: Google Cloud Proje ID'niz
   - `GCP_SA_KEY`: Base64 formatında servis hesabı anahtarınız
   - `HOTEL1_MONGODB_URI`, `HOTEL2_MONGODB_URI`, vb.
   - `HOTEL1_SMTP_USER`, `HOTEL2_SMTP_USER`, vb.
   - `HOTEL1_SMTP_PASS`, `HOTEL2_SMTP_PASS`, vb.
   - `HOTEL1_NOTIFICATION_EMAILS`, `HOTEL2_NOTIFICATION_EMAILS`, vb.

4. GitHub'daki `main` dalına bir push işlemi yaparak CI/CD sürecini başlatın

## Yeni Otel Ekleme

Yeni bir otel eklemek için:

1. `config.js` dosyasındaki `hotels` nesnesine yeni oteli ekleyin:
   ```javascript
   newHotel: {
     name: 'New Hotel Name',
     mongodb: 'mongodb+srv://...',
     emails: 'info@newhotel.com,manager@newhotel.com',
     smtpUser: 'newhotel@gmail.com',
     smtpPass: 'app_password',
   },
   ```

2. GitHub workflows'undaki matris tanımına yeni otel ID'sini ekleyin (`.github/workflows/deploy.yml`):
   ```yaml
   strategy:
     matrix:
       hotel: [hotel1, hotel2, newHotel]
   ```

3. GitHub Secrets'a yeni otelin bilgilerini ekleyin:
   - `NEWHOTEL_MONGODB_URI`
   - `NEWHOTEL_SMTP_USER`
   - `NEWHOTEL_SMTP_PASS`
   - `NEWHOTEL_NOTIFICATION_EMAILS`

4. Değişiklikleri main dalına push edin ve GitHub Actions workflow'unun çalışmasını bekleyin.

## API Endpoint'leri

API endpoint'leri hakkında detaylı bilgiler için [API Dokümantasyonu](docs/API.md) sayfasına bakın.

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın. 