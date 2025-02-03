// src/pages/FinAcademyPage.tsx
import React from "react";

const FinAcademyPage: React.FC = () => {
  return (
      <div className="flex flex-col min-h-screen relative bg-white">
        <main className="flex-grow relative text-gray-800 py-8 md:py-16 px-4 md:px-8">
          {/* Arka Plan */}
          <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to right, #3b82f6, #14b8a6)",
                clipPath: "polygon(0 0, 100% 0, 100% 2%, 0 40%)",
              }}
          />

          {/* İçerik */}
          <div className="relative z-10 max-w-6xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-8">
              Geleceğin Finansal Liderlerini Yetiştiriyoruz
            </h1>
            <p className="text-base md:text-lg text-center mb-8 md:mb-12">
              FinAcademy, finansal teknoloji ve inovasyona dayalı bilgi ve
              becerilerinizi geliştirmek için tasarlanmış bir eğitim platformudur.
              Amacımız, katılımcılarımızı en güncel bilgilerle donatarak,
              geleceğin finans dünyasında başarılı olmalarını sağlamaktır.
            </p>

            <h2 className="text-xl md:text-3xl font-semibold text-center mb-4">
              Neden FinAcademy?
            </h2>
            <ul className="list-disc list-inside text-center mb-8 md:mb-12 space-y-1">
              <li>Uzman Eğitimciler: Alanında deneyimli eğitmenlerimiz.</li>
              <li>Pratik Eğitim: Teorik bilgilerin yanı sıra gerçek dünya uygulamaları.</li>
              <li>
                Güncel Müfredat: Finans teknolojileriyle ilgili sürekli güncellenen eğitimler.
              </li>
            </ul>

            <h2 className="text-xl md:text-3xl font-semibold text-center mb-2">
              Eğitim Programlarımız
            </h2>
            <hr className="border-t-2 border-gray-700 w-4/5 mx-auto mb-8 md:mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              {/* Sol Sütun */}
              <div>
                <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3">
                  Fintech Giriş Seviyesi
                </h3>
                <ul className="list-disc list-inside mb-6 md:mb-10 space-y-1">
                  <li>Fintech nedir?</li>
                  <li>Temel kavramlar ve uygulamalar.</li>
                  <li>Sektördeki yenilikçi girişimler.</li>
                </ul>

                <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3">
                  Veri Analitiği ve Yapay Zeka
                </h3>
                <ul className="list-disc list-inside mb-6 md:mb-10 space-y-1">
                  <li>Veri analizi yöntemleri.</li>
                  <li>Müşteri davranışlarını anlamak için AI kullanımı.</li>
                  <li>Risk yönetimi ve fraud önleme teknikleri.</li>
                </ul>

                <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3">
                  Eğitim Formatları
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Çevrimiçi Kurslar: Esnek zamanlı eğitim imkanı sunar.</li>
                  <li>Yüz Yüze Seminerler: Canlı etkileşim fırsatı.</li>
                  <li>Atölye Çalışmaları: Pratik deneyim kazanma odaklı.</li>
                </ul>
              </div>

              {/* Sağ Sütun */}
              <div>
                <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3">Dijital Ödemeler</h3>
                <ul className="list-disc list-inside mb-6 md:mb-10 space-y-1">
                  <li>Dijital ödeme sistemleri nasıl çalışır?</li>
                  <li>Blockchain ve kripto para teknolojileri.</li>
                  <li>Mobil cüzdanların yükselişi.</li>
                </ul>

                <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3">
                  Regülasyonlar ve Uyum Süreçleri
                </h3>
                <ul className="list-disc list-inside mb-6 md:mb-10 space-y-1">
                  <li>Fintech regülasyonları nelerdir?</li>
                  <li>Uyum süreçlerinin önemi.</li>
                  <li>Global standartlar hakkında bilgilendirme.</li>
                </ul>

                <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3">Girişimcilik Atölyesi</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Başarılı bir fintech girişimi nasıl kurulur?</li>
                  <li>Yatırımcılarla etkili iletişim.</li>
                </ul>
              </div>
            </div>

            {/* İletişim */}
            <div className="text-center mt-8 md:mt-12">
              <h3 className="text-lg md:text-xl font-semibold mb-4">Bize Ulaşın</h3>
              <a
                  href="mailto:edu@finnovation.com.tr"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
              >
                edu@finnovation.com.tr
              </a>
            </div>
          </div>
        </main>
      </div>
  );
};

export default FinAcademyPage;
