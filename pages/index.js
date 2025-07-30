// pages/index.js
import Head from 'next/head'
import BPJSInfoPage from '../components/BPJSInfoPage'
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nik: '',
    namaLengkap: '',
    tanggalLahir: '',
    nomorHP: '',
    email: '',
    kelas: '',
    jurusan: '',
    namaSekolah: '',
    durasiMagang: '',
    tanggalMulai: '',
    tanggalSelesai: '',
    lokasiPKL: '',
    namaPerusahaan: '',
    namaIbuKandung: '',
    fotoKTP: null,
    fotoSelfie: null,
    setujuBPJS: false
  });

  // Calculate total cost based on duration
  const calculateTotalCost = (duration) => {
    if (!duration) return 0;
    return parseInt(duration) * 16800;
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files[0]
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.fotoKTP && !formData.fotoSelfie) {
    if (!confirm("Kamu belum upload foto. Lanjutkan?")) return;
  }

  const form = new FormData();
  Object.entries(formData).forEach(([key, value]) => {
    if (key === 'fotoKTP' || key === 'fotoSelfie') {
      form.append(key, value); // file
    } else {
      form.append(key, value); // text
    }
  });

  try {
    const res = await fetch('https://silky-cable-production.up.railway.app/api/participants', {
      method: 'POST',
      body: form
    });

    if (!res.ok) throw new Error('Gagal submit');

    const result = await res.json();
    alert('Pendaftaran berhasil!');
    console.log('Success:', result);

    // Optional: Reset form
    setFormData({
      nik: '',
      namaLengkap: '',
      tanggalLahir: '',
      nomorHP: '',
      email: '',
      kelas: '',
      jurusan: '',
      namaSekolah: '',
      durasiMagang: '',
      tanggalMulai: '',
      tanggalSelesai: '',
      lokasiPKL: '',
      namaPerusahaan: '',
      namaIbuKandung: '',
      fotoKTP: null,
      fotoSelfie: null,
      setujuBPJS: false
    });

  } catch (err) {
    console.error('Error:', err);
    alert('Terjadi kesalahan saat submit');
  }
};

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Pendaftaran PKL</title>
      </Head>

      {/* Header Section - Improved Mobile Responsiveness */}
      <div className="relative bg-cover bg-center h-[600px] sm:h-[700px] md:h-[820px]" style={{ backgroundImage: 'url(/bg-hero.png)' }}>
        {/* Logo Section - Better Mobile Layout */}
        <div className="absolute top-3 sm:top-6 left-3 sm:left-6 flex items-center gap-1 sm:gap-2">
          <img src="/dikpora.png" alt="dikpora" className="h-10 sm:h-12 md:h-16" />
          <img src="/kemnaker.png" alt="kemnaker" className="h-8 sm:h-10 md:h-14" />
          <img src="/bpjamsostek.png" alt="bpjamsostek" className="h-6 sm:h-8 md:h-12" />
        </div>
        
        {/* Login Buttons - Mobile Stack */}
        <div className="absolute top-3 sm:top-6 right-3 sm:right-6 flex flex-col sm:flex-row gap-1 sm:gap-2">
          <button 
            onClick={() => router.push('/login?role=admin')} 
            className="bg-green-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded text-xs sm:text-sm whitespace-nowrap"
          >
            Login Admin
          </button>
          <button 
            onClick={() => router.push('/login?role=mitra')} 
            className="bg-green-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded text-xs sm:text-sm whitespace-nowrap"
          >
            Login Mitra
          </button>
        </div>

        {/* Hero Text - Mobile Responsive */}
        <div className="text-left text-black pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-3 sm:px-6 md:px-20">
          <h1 className="text-lg sm:text-2xl md:text-[40px] font-extrabold uppercase leading-tight">
            Pendaftaran BPJS Ketenagakerjaan
          </h1>
          <p className="text-base sm:text-xl md:text-[32px] font-extrabold uppercase leading-tight mt-1 sm:mt-2">
            Siswa Praktik Kerja Lapangan/Magang
          </p>
          <p className="text-sm sm:text-base md:text-[20px] font-extrabold italic mt-2 sm:mt-3">
            <span className="text-[#015623]">Jaminan Sosial Ketenagakerjaan </span>
            <span className="text-[#0348C3]">bagi Siswa Magang</span>
          </p>
          <p className="text-sm sm:text-base md:text-[20px] font-extrabold text-[#0348C3] italic">
            dan Praktik Kerja Lapangan
          </p>
        </div>
      </div>

      {/* Main Form Section - Improved Mobile Layout */}
      <div className="flex flex-col lg:flex-row px-3 sm:px-6 md:px-20 -mt-[280px] sm:-mt-[350px] md:-mt-[480px] z-10 relative gap-3 sm:gap-4 md:gap-0">
        {/* Info Card - Better Mobile Spacing */}
        <div className="bg-green-300 rounded-lg p-4 sm:p-6 md:p-8 lg:w-1/3 shadow-lg">
          <h2 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-gray-800 leading-tight">
            Pendaftaran Peserta BPJS Praktik Kerja Lapangan/Magang
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Silakan isi data peserta (siswa) pada formulir di samping lalu lakukan pembayaran tagihan BPJS
          </p>
        </div>

        {/* Form Card - Responsive Spacing */}
        <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-lg flex-1">  
          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            {/* Basic Info Fields */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-600 mb-1 sm:mb-2">
                  Nomor Induk Kependudukan (NIK)
                </label>
                <input 
                  name="nik" 
                  value={formData.nik} 
                  onChange={handleInputChange} 
                  className="w-full border px-3 sm:px-4 py-2 sm:py-3 rounded text-sm sm:text-base focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-600 mb-1 sm:mb-2">
                  Nama Lengkap
                </label>
                <input 
                  name="namaLengkap" 
                  value={formData.namaLengkap} 
                  onChange={handleInputChange} 
                  className="w-full border px-3 sm:px-4 py-2 sm:py-3 rounded text-sm sm:text-base focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-600 mb-1 sm:mb-2">
                  Tanggal Lahir
                </label>
                <input 
                  type="date" 
                  name="tanggalLahir" 
                  value={formData.tanggalLahir} 
                  onChange={handleInputChange} 
                  className="w-full border px-3 sm:px-4 py-2 sm:py-3 rounded text-sm sm:text-base focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-600 mb-1 sm:mb-2">
                  Nomor Handphone (Whatsapp)
                </label>
                <input 
                  name="nomorHP" 
                  value={formData.nomorHP} 
                  onChange={handleInputChange} 
                  className="w-full border px-3 sm:px-4 py-2 sm:py-3 rounded text-sm sm:text-base focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-600 mb-1 sm:mb-2">
                  Email
                </label>
                <input 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  className="w-full border px-3 sm:px-4 py-2 sm:py-3 rounded text-sm sm:text-base focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-600 mb-1 sm:mb-2">
                  Nama Sekolah
                </label>
                <input 
                  name="namaSekolah" 
                  value={formData.namaSekolah} 
                  onChange={handleInputChange} 
                  className="w-full border px-3 sm:px-4 py-2 sm:py-3 rounded text-sm sm:text-base focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                />
              </div>
            </div>

            {/* School Info - Mobile Stacked */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-600 mb-1 sm:mb-2">
                    Kelas
                  </label>
                  <input 
                    name="kelas" 
                    value={formData.kelas} 
                    onChange={handleInputChange} 
                    className="w-full border px-3 sm:px-4 py-2 sm:py-3 rounded text-sm sm:text-base focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-600 mb-1 sm:mb-2">
                    Jurusan
                  </label>
                  <input 
                    name="jurusan" 
                    value={formData.jurusan} 
                    onChange={handleInputChange} 
                    className="w-full border px-3 sm:px-4 py-2 sm:py-3 rounded text-sm sm:text-base focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                  />
                </div>
              </div>
              
              {/* Duration and Cost - Mobile Stacked */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-600 mb-1 sm:mb-2">
                    Durasi Magang
                  </label>
                  <select 
                    name="durasiMagang" 
                    value={formData.durasiMagang} 
                    onChange={handleInputChange} 
                    className="w-full border px-3 sm:px-4 py-2 sm:py-3 rounded text-sm sm:text-base focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Pilih Durasi</option>
                    <option value="1">1 Bulan</option>
                    <option value="2">2 Bulan</option>
                    <option value="3">3 Bulan</option>
                    <option value="4">4 Bulan</option>
                    <option value="5">5 Bulan</option>
                    <option value="6">6 Bulan</option>
                    <option value="7">7 Bulan</option>
                    <option value="8">8 Bulan</option>
                    <option value="9">9 Bulan</option>
                    <option value="10">10 Bulan</option>
                    <option value="11">11 Bulan</option>
                    <option value="12">12 Bulan</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-600 mb-1 sm:mb-2">
                    Biaya Total
                  </label>
                  <input 
                    disabled 
                    className="w-full border px-3 sm:px-4 py-2 sm:py-3 rounded bg-green-100 text-gray-500 text-xs sm:text-sm font-normal" 
                    value={formData.durasiMagang ? formatCurrency(calculateTotalCost(formData.durasiMagang)) : 'Pilih durasi magang'} 
                  />
                </div>
              </div>
            </div>

            {/* Date Fields */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-600 mb-1 sm:mb-2">
                  Tanggal Mulai PKL/Magang
                </label>
                <input 
                  type="date" 
                  name="tanggalMulai" 
                  value={formData.tanggalMulai} 
                  onChange={handleInputChange} 
                  className="w-full border px-3 sm:px-4 py-2 sm:py-3 rounded text-sm sm:text-base focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-600 mb-1 sm:mb-2">
                  Tanggal Selesai PKL/Magang
                </label>
                <input 
                  type="date" 
                  name="tanggalSelesai" 
                  value={formData.tanggalSelesai} 
                  onChange={handleInputChange} 
                  className="w-full border px-3 sm:px-4 py-2 sm:py-3 rounded text-sm sm:text-base focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                />
              </div>
            </div>

            {/* Location and Company */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-600 mb-1 sm:mb-2">
                  Lokasi PKL/Magang
                </label>
                <input 
                  name="lokasiPKL" 
                  value={formData.lokasiPKL} 
                  onChange={handleInputChange} 
                  className="w-full border px-3 sm:px-4 py-2 sm:py-3 rounded text-sm sm:text-base focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-600 mb-1 sm:mb-2">
                  Nama Perusahaan Tempat PKL/Magang
                </label>
                <input 
                  name="namaPerusahaan" 
                  value={formData.namaPerusahaan} 
                  onChange={handleInputChange} 
                  className="w-full border px-3 sm:px-4 py-2 sm:py-3 rounded text-sm sm:text-base focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                />
              </div>
            </div>

            {/* Mother's Name and File Uploads */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-600 mb-1 sm:mb-2">
                  Nama Ibu Kandung
                </label>
                <input 
                  name="namaIbuKandung" 
                  value={formData.namaIbuKandung} 
                  onChange={handleInputChange} 
                  className="w-full border px-3 sm:px-4 py-2 sm:py-3 rounded text-sm sm:text-base focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                />
              </div>
              
              {/* File Upload Section - Mobile Stacked */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-600 mb-1 sm:mb-2">
                    Foto KTP/KK
                  </label>
                  <input 
                    type="file" 
                    name="fotoKTP" 
                    onChange={handleFileChange} 
                    className="w-full border px-2 sm:px-3 py-1 sm:py-2 rounded bg-white text-xs sm:text-sm file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs file:bg-green-50 file:text-green-700 hover:file:bg-green-100" 
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-600 mb-1 sm:mb-2">
                    Foto Selfie
                  </label>
                  <input 
                    type="file" 
                    name="fotoSelfie" 
                    onChange={handleFileChange} 
                    className="w-full border px-2 sm:px-3 py-1 sm:py-2 rounded bg-white text-xs sm:text-sm file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs file:bg-green-50 file:text-green-700 hover:file:bg-green-100" 
                  />
                </div>
              </div>
            </div>

            {/* Checkbox - Better Mobile Spacing */}
            <div className="flex items-start gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg">
              <input 
                type="checkbox" 
                name="setujuBPJS" 
                checked={formData.setujuBPJS} 
                onChange={handleInputChange} 
                className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" 
              />
              <label className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Setuju akan pendaftaran BPJS Ketenagakerjaan
              </label>
            </div>

            {/* Submit Button - Mobile Full Width */}
            <div className="flex justify-end pt-4 sm:pt-6">
              <button 
                type="submit" 
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors font-medium text-sm sm:text-base shadow-lg"
              >
                Kirim Pendaftaran
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* BPJS Info Section */}
      <BPJSInfoPage />
    </div>
  );
}