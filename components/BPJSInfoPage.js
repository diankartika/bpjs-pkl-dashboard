import React from 'react';

export default function BPJSInfoPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-8">
            INFORMASI TAMBAHAN
          </h1>

          {/* Main Info Section */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-blue-600 mb-4">
              PERMENAKER 5 TAHUN 2021
            </h2>
            <p className="text-gray-700 mb-4">
              Peserta magang, siswa kerja praktek WAJIB didaftarkan dalam program JKK dan JKM melalui kantor cabang BPJS Ketenagakerjaan
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 text-sm leading-relaxed">
                Magang/PKL merupakan bagian dari pelatihan kerja yang bekerja sama oleh lembaga pelatihan dengan cara 
                melakukan pekerjaan dan diawasi oleh pekerja yang telah profesional di bidangnya agar bisa mendapatkan 
                keterampilan dan keahlian tertentu. Namun, banyak resiko yang harus dihadapi salah satunya resiko atas 
                kecelakaan kerja
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
              MANFAAT
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-blue-600 mb-4">
                  BIAYA PENGOBATAN
                </h3>
                <p className="text-gray-700 text-sm">
                  Biaya perawatan rumah sakit sesuai dengan indikasi medis akibat kecelakaan kerja/magang
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-blue-600 mb-4">
                  STMB
                </h3>
                <p className="text-gray-700 text-sm">
                  Penggantian upah apabila pekerja tidak dapat magang/PKL karena dalam masa perawatan akibat kecelakaan kerja selama 12 bulan pertama
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-blue-600 mb-4">
                  SANTUNAN Rp 70 JUTA
                </h3>
                <p className="text-gray-700 text-sm">
                  Santunan kematian akibat kecelakaan kerja/magang
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-blue-600 mb-4">
                  SANTUNAN Rp 42 JUTA
                </h3>
                <p className="text-gray-700 text-sm">
                  Santunan kematian bukan akibat kecelakaan kerja/magang
                </p>
              </div>
            </div>
          </div>

          {/* Image and Price Section */}
          <div className="relative bg-gradient-to-r from-blue-50 to-white rounded-lg p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <div className="w-64 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-300 rounded-full mx-auto mb-2"></div>
                    <div className="w-12 h-12 bg-pink-200 rounded-full mx-auto mb-4"></div>
                    <p className="text-gray-500 text-sm">Student Image</p>
                  </div>
                </div>
              </div>

              <div className="text-center md:text-right">
                <p className="text-gray-600 mb-2">Iuran per bulan mulai dari</p>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  Rp <span className="text-5xl">16.800</span>
                </div>
                <div className="text-blue-600 font-medium">
                  <p>JAMINAN KECELAKAAN KERJA</p>
                  <p>JAMINAN KEMATIAN</p>
                  <p className="text-sm text-gray-500">/orang/bulan</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0">
              <svg viewBox="0 0 1200 120" className="w-full h-8">
                <path d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z" fill="#fbbf24"/>
              </svg>
            </div>
          </div>

          {/* Scope Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 text-center mb-6">
              Ruang Lingkup
            </h2>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>Perjalanan Berangkat dari Rumah sampai ke lokasi magang/PKL</li>
                <li>Selama di tempat magang/PKL yang berhubungan dengan tugasnya</li>
                <li>Perjalanan dari tempat magang/PKL sampai kembali lagi ke rumah</li>
                <li>Resiko meninggal dunia saat magang/PKL maupun bukan saat magang/PKL</li>
              </ol>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <button className="bg-blue-100 text-blue-700 py-3 px-6 rounded-lg font-medium hover:bg-blue-200 transition-colors">
                  Jaminan Kecelakaan Kerja
                </button>
                <button className="bg-orange-100 text-orange-700 py-3 px-6 rounded-lg font-medium hover:bg-orange-200 transition-colors">
                  Jaminan Kematian
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-green-600 h-12"></div>
    </div>
  );
}
