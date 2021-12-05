### Veri Önişleme Dersi Final Ödevi

##### İçerik:
**FortniteStatistics** adlı bir veri seti üzerinde eksik veriler, ***aritmetik ortalama*** yöntemi ile dolduruldu.
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
***Kutu Grafiği*** ve ***Frekans Tablosu*** grafiksel olarak gösterilmiştir.

Projede **Front-end** için ***VueJS***, **backend*** için ise ***NodeJS*** kullanılmıştır.
Grafik çizileri HTML Canvas ile yapılmıştır.

### Kullanımı

-  **Dosyayı Yükle** butonuna tıklanarak istatistik dosyası aktif edilir.
-  (Kullanımı İsteğe Bağlı) Eğer veri setinde eksik değerler varsa (ki orjinal veri setinde bulunmaktadır) eksik değerlerle beraber veri setini ekranda gösterir.
- (Kullanımı İsteğe Bağlı) Veri setindeki eksik verileri, her bir niteliğin aritmetik ortalaması ile doldurur.
- Veri setindeki eksiklikleri doldurduktan sonra hemen kaydetmez. Eğer **Kaydet** butonuna basılırsa verilerin doldurulmuş halini, eski veri setinin üzerine yazmadan farklı bir dosya olarak kaydeder ki her girişte yeniden kullanılabilsin.
- Veri setinin aritmetik ortalaması, medyanının hesaplanması için herbirinin ayrı butonu vardır ve tıklandığında ekranda tablo şeklinde değeleri listeleyecektir. Ancak veri setinde, sayısal değerlerden oluşmayan niteliklerinin hesaplamalarının sonuçları 0 olarak gösterildi.

### Kullanılan paketler
csvtojson
csv-writer
Express
