var Ardublockly = Ardublockly || {};
Ardublockly.LOCALISED_TEXT = {
  translationLanguage: "Türkçe",
  title: "HefaBot",
  blocks: "Blok",
  /* Menu */
  open: "Aç",
  save: "Kaydet",
  deleteAll: "Hepsini Sil",
  settings: "Ayarlar",
  documentation: "Dökümantasyon",
  reportBug: "Report Bug",
  examples: "Örnek Projeler",
  /* Settings */
  compilerLocation: "Derleyici Konumu",
  compilerLocationDefault: "Derleyici Konumu Bilinmiyor",
  sketchFolder: "Çalışma Klasörü",
  sketchFolderDefault: "Çalışma Klasörü Bilinmiyor",
  arduinoBoard: "Arduino Kartı",
  arduinoBoardDefault: "Arduino Kartı Bilinmiyor",
  comPort: "COM Port",
  comPortDefault: "COM Port Bilinmiyor",
  defaultIdeButton: "Varsayılan IDE Butonu",
  defaultIdeButtonDefault: "IDE Seçenekleri Bilinmiyor",
  language: "Dil",
  languageDefault: "Dil Bilinmiyor",
  sketchName: "Çalışma Adı",
  /* Arduino console output */
  arduinoOpMainTitle: "Arduino IDE Çıkışı",
  arduinoOpWaiting: "IDE bekleniyor...",
  arduinoOpUploadedTitle: "Proje Başarıyla Yüklendi",
  arduinoOpVerifiedTitle: "Proje Başarıyla Doğrulandı",
  arduinoOpOpenedTitle: "IDE ile çalışmayı aç",
  arduinoOpOpenedBody: "Çalışma, Arduino IDE'ye yüklenmelidir.",
  arduinoOpErrorUpVerTitle: "Derleme veya Yükleme başarısız oldu",
  arduinoOpErrorSketchTitle: "Çalışma bulunamadı",
  arduinoOpErrorFlagTitle: "Geçersiz komut satırı argümanı",
  arduinoOpErrorFlagPrefTitle: "Get-pref bayrağına geçilen tercih mevcut değil",
  arduinoOpErrorIdeDirTitle: "Arduino IDE bulunamıyor",
  arduinoOpErrorIdeDirBody: "Derleyici dizini ayarlanmadı.<br>" +
                            "Lütfen bunu Ayarlar'da ayarlayın.",
  arduinoOpErrorIdeOptionTitle: "Sketch ile ne yapmalıyız?",
  arduinoOpErrorIdeOptionBody: "IDE başlatma seçeneği ayarlanmadı..<br>" +
                               "Lütfen Ayarlar'da bir IDE seçeneği seçin.",
  arduinoOpErrorIdePortTitle: "Seri Bağlantı Noktası kullanılamıyor",
  arduinoOpErrorIdePortBody: "Seri Bağlantı Noktasına erişilemez.<br>" +
                             "Lütfen Arduino'nun PC'ye doğru şekilde bağlanıp bağlanmadığını kontrol edin ve Ayarlar'da Seri Portu seçin.",
  arduinoOpErrorIdeBoardTitle: "Bilinmeyen Arduino Kartı",
  arduinoOpErrorIdeBoardBody: "Arduino Kartı ayarlanmadı.<br>" +
                              "Lütfen ayarlardan uygun Arduino Kartını seçin.",
  /* Modals */
  noServerTitle: "Ardublockly app not running",
  noServerTitleBody: "<p>Tüm Ardublockly özelliklerinin etkinleştirilmesi için Ardublockly masaüstü uygulamasının bilgisayarınızda yerel olarak çalışıyor olması gerekir.</p>" +
                     "<p>Çevrimiçi bir sürüm kullanıyorsanız, ayarları yapılandıramaz veya blok kodunu bir Arduino'ya yükleyemezsiniz.</p>" +
                     "<p>Kurulum talimatı şurada bulunabilir: <a href=\"https://github.com/carlosperate/ardublockly\">Ardublockly repository</a>.</p>" +
                     "<p>Ardublockly'yi zaten yüklediyseniz, uygulamanın doğru şekilde çalıştığından emin olun.</p>",
  noServerNoLangBody: "Ardublockly uygulaması çalışmıyorsa, dil tamamen değiştirilemez.",
  addBlocksTitle: "Ek Bloklar",
  /* Alerts */
  loadNewBlocksTitle: "Yeni bloklar yüklensin mi?",
  loadNewBlocksBody: "Yeni bir XML dosyası yüklemek, çalışma alanındaki mevcut blokların yerini alacaktır.<br>" +
                     "Devam etmek istediğinizden emin misiniz?",
  discardBlocksTitle: "Bloklar silinsin mi?",
  discardBlocksBody: "Çalışma alanında% 1 blok var.<br>" +
                     "Silmek istediğinizden emin misiniz?",
  invalidXmlTitle: "Geçersiz XML",
  invalidXmlBody: "XML dosyası başarıyla bloklara ayrıştırılmadı. Lütfen XML kodunu inceleyin ve tekrar deneyin.",
  /* Tooltips */
  uploadingSketch: "Çalışma Arduino'ya Yükleniyor...",
  uploadSketch: "Arduino'ya Çalışmayı Yükleyin",
  verifyingSketch: "Çalışma Doğrulanıyor...",
  verifySketch: "Çalışma Doğrulandı",
  openingSketch: "Arduino IDE'de Çalışma Açılıyor ......",
  openSketch: "IDE'de Çalışmayı aç",
  notImplemented: "İşlev henüz uygulanmadı.",
  /* Prompts */
  ok: "Tamam",
  okay: "Tamam",
  cancel: "Çıkış",
  return: "Kaydet",
  /* Cards */
  arduinoSourceCode: "Arduino Kaynak Kodu",
  blocksXml: "Block XML",
  /* Toolbox Categories*/
  catLogic: "Mantık",
  catLoops: "Döngüler",
  catMath: "Matematik",
  catText: "Metin",
  catVariables: "Değişkenler",
  catFunctions: "Fonksiyonlar",  
  catInputOutput: "Giriş/Çıkış",
  catTime: "Zaman",
  emre: "emre",
  catAudio: "Ses",
  catMotors: "Motor",
  catComms: "İletişim",
};
