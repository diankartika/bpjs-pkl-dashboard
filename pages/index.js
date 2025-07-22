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

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Pendaftaran PKL</title>
      </Head>

      {/* Header Section */}
      <div className="relative bg-cover bg-center h-[450px]" style={{ backgroundImage: 'url(/bg-hero.png)' }}>
        {/* Logo kiri atas */}
        <div className="absolute top-6 left-6 flex items-center gap-0.5">
          <img src="/dikpora.png" alt="dikpora" className="h-16" />
          <img src="/kemnaker.png" alt="kemnaker" className="h-14" />
          <img src="/bpjamsostek.png" alt="bpjamsostek" className="h-12" />
        </div>

        {/* Tombol kanan atas */}
        <div className="absolute top-6 right-6 flex gap-2">
          <button
            onClick={() => router.push('/admin')}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Login Admin
          </button>
          <button
            onClick={() => router.push('/mitra')}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Login Mitra
          </button>
        </div>
        <div className="text-left text-black pt-32 pb-20 px-4 md:px-20">
          <h1 className="text-[40px] font-extrabold uppercase">Pendaftaran BPJS Ketenagakerjaan</h1>
          <p className="text-[32px] font-extrabold uppercase">Siswa Praktik Kerja Lapangan/Magang</p>
          <p className="text-[20px] font-extrabold italic">
            <span className="text-[#015623]">Jaminan Sosial Ketenagakerjaan </span>
            <span className="text-[#0348C3]">bagi Siswa Magang</span>
          </p>
          <p className="text-[20px] font-extrabold text-[#0348C3] italic">dan Praktik Kerja Lapangan</p>
        </div>
      </div>

      {/* Main Form Section */}
      <div className="flex flex-col md:flex-row px-4 md:px-20 -mt-20 z-10 relative gap-8">
        {/* Side Panel */}
        <div className="bg-green-300 rounded-lg p-8 md:w-1/3 shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Pendaftaran Peserta BPJS Praktik Kerja Lapangan/Magang</h2>
          <p className="text-gray-700 leading-relaxed">Silakan isi data peserta (siswa) pada formulir di samping lalu lakukan pembayaran tagihan BPJS</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg p-8 shadow-lg flex-1">
          <form className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input 
                  type="text" 
                  name="nik"
                  value={formData.nik}
                  onChange={handleInputChange}
                  placeholder="Nomor Induk Kependudukan (NIK)" 
                  className="w-full border-b-2 border-gray-300 pb-2 focus:border-green-500 focus:outline-none transition-colors bg-transparent placeholder-gray-500" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  name="namaLengkap"
                  value={formData.namaLengkap}
                  onChange={handleInputChange}
                  placeholder="Nama Lengkap" 
                  className="w-full border-b-2 border-gray-300 pb-2 focus:border-green-500 focus:outline-none transition-colors bg-transparent placeholder-gray-500" 
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input 
                  type="date" 
                  name="tanggalLahir"
                  value={formData.tanggalLahir}
                  onChange={handleInputChange}
                  className="w-full border-b-2 border-gray-300 pb-2 focus:border-green-500 focus:outline-none transition-colors bg-transparent text-gray-500" 
                />
                <label className="absolute -top-4 left-0 text-sm text-gray-500">Tanggal Lahir</label>
                <svg className="absolute right-2 top-0 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <input 
                  type="text" 
                  name="nomorHP"
                  value={formData.nomorHP}
                  onChange={handleInputChange}
                  placeholder="Nomor Handphone (Whatsapp)" 
                  className="w-full border-b-2 border-gray-300 pb-2 focus:border-green-500 focus:outline-none transition-colors bg-transparent placeholder-gray-500" 
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email" 
                  className="w-full border-b-2 border-gray-300 pb-2 focus:border-green-500 focus:outline-none transition-colors bg-transparent placeholder-gray-500" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  name="kelas"
                  value={formData.kelas}
                  onChange={handleInputChange}
                  placeholder="Kelas" 
                  className="w-full border-b-2 border-gray-300 pb-2 focus:border-green-500 focus:outline-none transition-colors bg-transparent placeholder-gray-500" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  name="jurusan"
                  value={formData.jurusan}
                  onChange={handleInputChange}
                  placeholder="Jurusan" 
                  className="w-full border-b-2 border-gray-300 pb-2 focus:border-green-500 focus:outline-none transition-colors bg-transparent placeholder-gray-500" 
                />
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <input 
                  type="text" 
                  name="namaSekolah"
                  value={formData.namaSekolah}
                  onChange={handleInputChange}
                  placeholder="Nama Sekolah" 
                  className="w-full border-b-2 border-gray-300 pb-2 focus:border-green-500 focus:outline-none transition-colors bg-transparent placeholder-gray-500" 
                />
              </div>
              <div className="relative">
                <select 
                  name="durasiMagang"
                  value={formData.durasiMagang}
                  onChange={handleInputChange}
                  className="w-full border-b-2 border-gray-300 pb-2 focus:border-green-500 focus:outline-none transition-colors bg-transparent text-gray-500 appearance-none"
                >
                  <option value="">Durasi Magang</option>
                  <option value="8">8 bulan</option>
                  <option value="4">4 bulan</option>
                  <option value="2">2 bulan</option>
                </select>
                <svg className="absolute right-2 top-0 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div>
                <input 
                  type="text" 
                  name="biayaTotal"
                  placeholder="Biaya total" 
                  className="w-full border-b-2 border-gray-300 pb-2 bg-green-100 text-gray-500 cursor-not-allowed" 
                  disabled 
                />
              </div>
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input 
                  type="date" 
                  name="tanggalMulai"
                  value={formData.tanggalMulai}
                  onChange={handleInputChange}
                  className="w-full border-b-2 border-gray-300 pb-2 focus:border-green-500 focus:outline-none transition-colors bg-transparent text-gray-500" 
                />
                <label className="absolute -top-4 left-0 text-sm text-gray-500">Tanggal Mulai PKL/Magang</label>
                <svg className="absolute right-2 top-0 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="relative">
                <input 
                  type="date" 
                  name="tanggalSelesai"
                  value={formData.tanggalSelesai}
                  onChange={handleInputChange}
                  className="w-full border-b-2 border-gray-300 pb-2 focus:border-green-500 focus:outline-none transition-colors bg-transparent text-gray-500" 
                />
                <label className="absolute -top-4 left-0 text-sm text-gray-500">Tanggal Selesai PKL/Magang</label>
                <svg className="absolute right-2 top-0 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            {/* Row 6 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input 
                  type="text" 
                  name="lokasiPKL"
                  value={formData.lokasiPKL}
                  onChange={handleInputChange}
                  placeholder="Lokasi PKL/Magang" 
                  className="w-full border-b-2 border-gray-300 pb-2 focus:border-green-500 focus:outline-none transition-colors bg-transparent placeholder-gray-500" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  name="namaPerusahaan"
                  value={formData.namaPerusahaan}
                  onChange={handleInputChange}
                  placeholder="Nama Perusahaan Tempat PKL/Magang" 
                  className="w-full border-b-2 border-gray-300 pb-2 focus:border-green-500 focus:outline-none transition-colors bg-transparent placeholder-gray-500" 
                />
              </div>
            </div>

            {/* Row 7 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <input 
                  type="text" 
                  name="namaIbuKandung"
                  value={formData.namaIbuKandung}
                  onChange={handleInputChange}
                  placeholder="Nama Ibu Kandung" 
                  className="w-full border-b-2 border-gray-300 pb-2 focus:border-green-500 focus:outline-none transition-colors bg-transparent placeholder-gray-500" 
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-2">Foto KTP/KK <span className="text-xs">(salah satu)</span></label>
                <button 
                  type="button"
                  className="w-full border-2 border-dashed border-gray-300 rounded-lg px-4 py-6 text-center text-gray-500 hover:border-green-500 hover:text-green-500 transition-colors"
                  onClick={() => document.getElementById('fotoKTP').click()}
                >
                  Tambahkan file
                </button>
                <input 
                  type="file" 
                  id="fotoKTP"
                  name="fotoKTP"
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-2">Foto Selfie</label>
                <button 
                  type="button"
                  className="w-full border-2 border-dashed border-gray-300 rounded-lg px-4 py-6 text-center text-gray-500 hover:border-green-500 hover:text-green-500 transition-colors"
                  onClick={() => document.getElementById('fotoSelfie').click()}
                >
                  Tambahkan file
                </button>
                <input 
                  type="file" 
                  id="fotoSelfie"
                  name="fotoSelfie"
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*"
                />
              </div>
            </div>

            {/* Submit Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6">
              <label className="inline-flex items-center">
                <input 
                  type="checkbox" 
                  name="setujuBPJS"
                  checked={formData.setujuBPJS}
                  onChange={handleInputChange}
                  className="mr-3 w-4 h-4 text-green-600" 
                />
                <span className="text-gray-700">Setuju akan pendaftaran BPJS Ketenagakerjaan</span>
              </label>
              <button 
                type="submit" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-colors font-medium"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Tambahan Informasi BPJS */}
      <BPJSInfoPage />
    </div>
  )
}