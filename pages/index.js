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
  e.preventDefault(); // cegah reload

  const form = new FormData();
  Object.entries(formData).forEach(([key, value]) => {
    form.append(key, value);
  });

  try {
    const res = await fetch('/api/peserta', {
      method: 'POST',
      body: form,
    });

    if (res.ok) {
      alert('Data berhasil dikirim!');
      setFormData({ // reset form kalau perlu
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
    } else {
      alert('Gagal mengirim data');
    }
  } catch (error) {
    console.error('Error submit:', error);
    alert('Terjadi error saat mengirim data');
  }
};


  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Pendaftaran PKL</title>
      </Head>

      {/* Header Section */}
      <div className="relative bg-cover bg-center h-[820px]" style={{ backgroundImage: 'url(/bg-hero.png)' }}>
        <div className="absolute top-6 left-6 flex items-center gap-0.5">
          <img src="/dikpora.png" alt="dikpora" className="h-16" />
          <img src="/kemnaker.png" alt="kemnaker" className="h-14" />
          <img src="/bpjamsostek.png" alt="bpjamsostek" className="h-12" />
        </div>
        <div className="absolute top-6 right-6 flex gap-2">
          <button onClick={() => router.push('/login?role=admin')} className="bg-green-600 text-white px-4 py-2 rounded">
            Login Admin
          </button>
          <button onClick={() => router.push('/login?role=mitra')} className="bg-green-600 text-white px-4 py-2 rounded">
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
      <div className="flex flex-col md:flex-row px-4 md:px-20 -mt-[480px] z-10 relative gap-0">
        <div className="bg-green-300 rounded-lg p-8 md:w-1/3 shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Pendaftaran Peserta BPJS Praktik Kerja Lapangan/Magang</h2>
          <p className="text-gray-700 leading-relaxed">Silakan isi data peserta (siswa) pada formulir di samping lalu lakukan pembayaran tagihan BPJS</p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg flex-1">  
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Nomor Induk Kependudukan (NIK)</label>
                <input name="nik" value={formData.nik} onChange={handleInputChange} className="w-full border px-4 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Nama Lengkap</label>
                <input name="namaLengkap" value={formData.namaLengkap} onChange={handleInputChange} className="w-full border px-4 py-2 rounded" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Tanggal Lahir</label>
                <input type="date" name="tanggalLahir" value={formData.tanggalLahir} onChange={handleInputChange} className="w-full border px-4 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Nomor Handphone (Whatsapp)</label>
                <input name="nomorHP" value={formData.nomorHP} onChange={handleInputChange} className="w-full border px-4 py-2 rounded" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Email</label>
                <input name="email" value={formData.email} onChange={handleInputChange} className="w-full border px-4 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Nama Sekolah</label>
                <input name="namaSekolah" value={formData.namaSekolah} onChange={handleInputChange} className="w-full border px-4 py-2 rounded" />
              </div>
            </div>

            {/* Updated grid layout to match the alignment pattern */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">Kelas</label>
                  <input name="kelas" value={formData.kelas} onChange={handleInputChange} className="w-full border px-4 py-2 rounded" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">Jurusan</label>
                  <input name="jurusan" value={formData.jurusan} onChange={handleInputChange} className="w-full border px-4 py-2 rounded" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">Durasi Magang</label>
                  <select name="durasiMagang" value={formData.durasiMagang} onChange={handleInputChange} className="w-full border px-4 py-2 rounded">
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
                  <label className="block text-sm font-semibold text-gray-600 mb-1">Biaya Total</label>
                  <input 
                    disabled 
                    className="w-full border px-4 py-2 rounded bg-green-100 text-gray-500 text-sm font-normal" 
                    value={formData.durasiMagang ? formatCurrency(calculateTotalCost(formData.durasiMagang)) : 'Pilih durasi magang'} 
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Tanggal Mulai PKL/Magang</label>
                <input type="date" name="tanggalMulai" value={formData.tanggalMulai} onChange={handleInputChange} className="w-full border px-4 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Tanggal Selesai PKL/Magang</label>
                <input type="date" name="tanggalSelesai" value={formData.tanggalSelesai} onChange={handleInputChange} className="w-full border px-4 py-2 rounded" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Lokasi PKL/Magang</label>
                <input name="lokasiPKL" value={formData.lokasiPKL} onChange={handleInputChange} className="w-full border px-4 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Nama Perusahaan Tempat PKL/Magang</label>
                <input name="namaPerusahaan" value={formData.namaPerusahaan} onChange={handleInputChange} className="w-full border px-4 py-2 rounded" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Nama Ibu Kandung</label>
                <input name="namaIbuKandung" value={formData.namaIbuKandung} onChange={handleInputChange} className="w-full border px-4 py-2 rounded" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">Foto KTP/KK</label>
                  <input type="file" name="fotoKTP" onChange={handleFileChange} className="w-full border px-2 py-1 rounded bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">Foto Selfie</label>
                  <input type="file" name="fotoSelfie" onChange={handleFileChange} className="w-full border px-2 py-1 rounded bg-white" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input type="checkbox" name="setujuBPJS" checked={formData.setujuBPJS} onChange={handleInputChange} className="w-4 h-4 text-green-600" />
              <label className="text-gray-700">Setuju akan pendaftaran BPJS Ketenagakerjaan</label>
            </div>

            <div className="flex justify-end">
              <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-colors font-medium">
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Tambahan Informasi BPJS */}
      <BPJSInfoPage />
    </div>
  );
}