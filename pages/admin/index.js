import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [participants, setParticipants] = useState([]);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const fetchParticipants = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://silky-cable-production.up.railway.app/api/participants');
        const data = await res.json();
        setParticipants(data);
      } catch (err) {
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    fetchParticipants();

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredData = participants.filter(item =>
    item.namaLengkap?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.jurusan?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.namaSekolah?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportToCSV = () => {
    const headers = [
      "Nama Lengkap", "Sekolah", "Nomor HP", "Email", "Jurusan",
      "Durasi Magang", "Tanggal Mulai", "Tanggal Selesai",
      "Lokasi PKL", "Perusahaan", "Nama Ibu"
    ];

    const rows = participants.map(item => [
      item.namaLengkap, item.namaSekolah, item.nomorHP, item.email, item.jurusan,
      item.durasiMagang, item.tanggalMulai, item.tanggalSelesai,
      item.lokasiPKL, item.namaPerusahaan, item.namaIbuKandung
    ]);

    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += headers.join(",") + "\r\n";
    rows.forEach(rowArray => {
      const row = rowArray.map(val => `"${val}"`).join(",");
      csvContent += row + "\r\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "data_peserta.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700">Dashboard Admin</h1>
        <button
          onClick={() => router.push('/')}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Keluar
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="bg-green-100 rounded-lg p-6 flex-1 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">Total Registrasi</h2>
          <div className="text-3xl sm:text-4xl font-bold text-gray-800">{participants.length}</div>
        </div>
        <div className="bg-green-100 rounded-lg p-6">
          <button
            onClick={exportToCSV}
            className="text-base sm:text-lg font-semibold text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-3"
          >
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Export<br />data</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filter
        </button>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Cari data"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-3 bg-white rounded-full border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:outline-none transition-all"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px]">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-gray-500 font-medium">No</th>
                <th className="px-6 py-4 text-left text-gray-500 font-medium">Nama Peserta</th>
                <th className="px-6 py-4 text-left text-gray-500 font-medium">Sekolah</th>
                <th className="px-6 py-4 text-left text-gray-500 font-medium">No. HP</th>
                <th className="px-6 py-4 text-left text-gray-500 font-medium">Email</th>
                <th className="px-6 py-4 text-left text-gray-500 font-medium">Jurusan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {paginatedData.map((item, index) => (
                <tr key={item._id}>
                  <td className="px-6 py-4 text-gray-900 font-medium">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td className="px-6 py-4 text-gray-900 font-medium">{item.namaLengkap}</td>
                  <td className="px-6 py-4 text-gray-700">{item.namaSekolah}</td>
                  <td className="px-6 py-4 text-gray-700">{item.nomorHP}</td>
                  <td className="px-6 py-4">
                    <a href={`mailto:${item.email}`} className="text-gray-700 hover:text-green-600 underline transition-colors">
                      {item.email}
                    </a>
                  </td>
                  <td className="px-6 py-4 text-gray-700 text-left">{item.jurusan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-gray-100 hover:bg-gray-200 p-3 rounded-lg transition-colors disabled:opacity-50"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex items-center gap-4">
          <span className="text-gray-600 font-medium">
            Halaman {currentPage} dari {totalPages}
          </span>
        </div>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="bg-gray-100 hover:bg-gray-200 p-3 rounded-lg transition-colors disabled:opacity-50"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
