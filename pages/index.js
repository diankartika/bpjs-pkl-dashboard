// pages/index.js
import Head from 'next/head'
import BPJSInfoPage from '../components/BPJSInfoPage'

export default function Home() {
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
          <button className="bg-green-600 text-white px-4 py-2 rounded">Login Admin</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded">Login Mitra</button>
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
      <div className="flex flex-col md:flex-row px-4 md:px-20 -mt-20 z-10 relative gap-2 md:gap-0">
        {/* Side Panel */}
        <div className="bg-green-100 rounded-lg p-6 md:w-1/3 shadow">
          <h2 className="text-lg font-bold mb-2">Pendaftaran Peserta BPJS Praktik Kerja Lapangan/Magang</h2>
          <p className="text-sm text-gray-700">Silakan isi data peserta (siswa) pada formulir di samping lalu lakukan pembayaran tagihan BPJS.</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg p-6 shadow w-full">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <input type="text" placeholder="Nomor Induk Kependudukan (NIK)" className="border px-4 py-2 rounded" />
            <input type="text" placeholder="Nama Lengkap" className="border px-4 py-2 rounded" />

            <input type="date" className="border px-4 py-2 rounded" placeholder="Tanggal Lahir" />
            <input type="text" placeholder="Nomor Handphone (Whatsapp)" className="border px-4 py-2 rounded" />

            <input type="email" placeholder="Email" className="border px-4 py-2 rounded" />
            <div className="flex gap-2">
              <input type="text" placeholder="Kelas" className="border px-4 py-2 rounded w-1/2" />
              <input type="text" placeholder="Jurusan" className="border px-4 py-2 rounded w-1/2" />
            </div>

            <input type="text" placeholder="Nama Sekolah" className="border px-4 py-2 rounded" />
            <select className="border px-4 py-2 rounded">
              <option value="">Durasi Magang</option>
              <option value="8">8 bulan</option>
              <option value="4">4 bulan</option>
              <option value="2">2 bulan</option>
            </select>

            <input type="date" placeholder="Tanggal Mulai PKL/Magang" className="border px-4 py-2 rounded" />
            <input type="text" placeholder="Biaya total" className="border px-4 py-2 rounded bg-green-100" disabled />

            <input type="text" placeholder="Nama Ibu Kandung" className="border px-4 py-2 rounded" />
            <input type="date" placeholder="Tanggal Selesai PKL/Magang" className="border px-4 py-2 rounded" />

            <div>
              <label className="block font-semibold">Foto KTP/KK</label>
              <input type="file" className="mt-1" />
            </div>
            <div>
              <label className="block font-semibold">Foto Selfie</label>
              <input type="file" className="mt-1" />
            </div>

            <div className="col-span-2 flex flex-col gap-4 mt-4">
              <label className="inline-flex items-center">
                <input type="checkbox" className="mr-2" /> Setuju akan pendaftaran BPJS Ketenagakerjaan
              </label>
              <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded self-end">Kirim</button>
            </div>
          </form>
        </div>
      </div>

      {/* Tambahan Informasi BPJS */}
      <BPJSInfoPage />
    </div>
  )
}
