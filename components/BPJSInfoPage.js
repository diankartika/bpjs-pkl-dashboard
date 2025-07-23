import React from 'react';

export default function BPJSInfoPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header & Main Content */}
      <div className="bg-white shadow-sm">
        <div className="px-4 md:px-20 py-8">
          {/* Judul */}
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-8">
            INFORMASI TAMBAHAN
          </h1>

          {/* Info Permenaker */}
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

          {/* Manfaat */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
              MANFAAT
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <BenefitCard title="BIAYA PENGOBATAN" desc="Biaya perawatan rumah sakit sesuai dengan indikasi medis akibat kecelakaan kerja/magang" />
              <BenefitCard title="STMB" desc="Penggantian upah apabila pekerja tidak dapat magang/PKL karena dalam masa perawatan akibat kecelakaan kerja selama 12 bulan pertama" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <BenefitCard title="SANTUNAN Rp 70 JUTA" desc="Santunan kematian akibat kecelakaan kerja/magang" />
              <BenefitCard title="SANTUNAN Rp 42 JUTA" desc="Santunan kematian bukan akibat kecelakaan kerja/magang" />
            </div>
          </div>
        </div>
      </div>

      {/* Image and Price Section — Full Width */}
      <div className="relative bg-white w-full overflow-hidden">
        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center h-full">
          {/* Left side - Students image */}
          <div className="flex justify-center md:justify-start">
            <img 
              src="/siswa.png" 
              alt="Students" 
              className="w-82 h-50 object-contain"
            />
          </div>

          {/* Right side - Price information */}
          <div className="text-center md:text-right md:ml-auto">
            <p className="text-blue-700 font-medium mb-3 text-lg">
              Iuran per bulan mulai dari
            </p>
            <div className="mb-4">
              <span className="text-blue-700 text-3xl font-bold">Rp </span>
              <span className="text-blue-700 text-6xl font-bold">16.800</span>
            </div>
            <div className="text-blue-700 font-semibold space-y-1">
              <p className="text-lg">JAMINAN KECELAKAAN KERJA</p>
              <p className="text-lg">JAMINAN KEMATIAN</p>
              <p className="text-sm text-blue-600 mt-2">/orang/bulan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ruang Lingkup */}
      <div className="bg-white px-4 md:px-20 py-8">
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

      {/* Footer */}
      <div className="bg-green-600 h-12"></div>
    </div>
  );
}

// Komponen kartu manfaat
function BenefitCard({ title, desc }) {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
      <h3 className="text-lg font-semibold text-blue-600 mb-4">{title}</h3>
      <p className="text-gray-700 text-sm">{desc}</p>
    </div>
  );
}
