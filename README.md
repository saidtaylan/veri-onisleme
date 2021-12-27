### Veri Önişleme Dersi Final Ödevi

##### İçerik:

**FortniteStatistics** adlı bir veri seti üzerinde eksik veriler, **_aritmetik ortalama_** yöntemi ile dolduruldu.
**Ayrıca veri setinin;**

- Aritmetik Ortalaması
- Medyan
- Mod Değeri
- Frekan Tablosu
- IQR değeri
- Aykırı Değerler
- Beş Sayı Özeti
- Kutu Grafiği
- Varyans
- Standart sapma
  değerleri de hesaplanmıştır.
  **_Kutu Grafiği_** ve **_Frekans Tablosu_** grafiksel olarak gösterilmiştir.

### Kullanılan araçlar ve Paketler:

- VueJS
- Vite (vueJS için)
- Axios (Frontend isetkleri için)
- ExpressJS
- csv-writer
- csvtojson
- ApexChart (Grafikler için)
- Bootstrap

### Kullanımı

- **Dosyayı Yükle** butonuna tıklanarak istatistik dosyası aktif edilir.
- (Kullanımı İsteğe Bağlı) Eğer veri setinde eksik değerler varsa (ki orjinal veri setinde bulunmaktadır) eksik değerlerle beraber veri setini ekranda gösterir.
- (Kullanımı İsteğe Bağlı) Veri setindeki eksik verileri, her bir niteliğin aritmetik ortalaması ile doldurur.
- Veri setindeki eksiklikleri doldurduktan sonra hemen kaydetmez. Eğer **Kaydet** butonuna basılırsa verilerin doldurulmuş halini, eski veri setinin üzerine yazmadan farklı bir dosya olarak kaydeder ki her girişte yeniden kullanılabilsin.
- Veri setinin aritmetik ortalaması, medyanının... hesaplanması için herbirinin ayrı butonu vardır ve tıklandığında ekranda tablo şeklinde değeleri listeleyecektir.

## TODOS (En kısa zamanda yapmaya çalışacağım.)

- [ ] Backend: Klasör yapısı düzenlenip nesne yönelimli yapıya geçiş yapılacak
- [ ] Frontend: Aritmetik operasyonların componentleri slot olarak tek bir table yapısına geçirilecek.
- [ ] Backend: Tek bir **FortniteStatistics** dosyasında değil dinamik olarak bütün dosyalar kabul edilecek.
- [ ] Backend: Eksik verileri doldurulup kaydedilen dosya, istenildiği zaman kullanıcıya gösterilebilecek.
