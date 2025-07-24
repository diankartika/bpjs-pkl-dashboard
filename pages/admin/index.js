import React, { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:5050/api/participants');
        const data = await res.json();
        setParticipants(data);
      } catch (err) {
        console.error('Failed to fetch participants:', err);
      }
    };

    fetchData();
  }, []);

  const filteredData = participants.filter(item =>
    item.namaLengkap?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.namaSekolah?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-green-700">Dashboard Admin</h1>
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Keluar
        </button>
      </div>

      {/* Stats Card */}
      <div className="flex gap-4 mb-8">
        <div className="bg-green-100 rounded-lg p-6 flex-1">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Total<br />Registrasi
          </h2>
          <div className="text-4xl font-bold text-gray-800">2000</div>
        </div>
        <div className="bg-green-100 rounded-lg p-6">
          <button className="text-lg font-semibold text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-3">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Export<br />data</span>
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-4 mb-6">
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

      {/* Data Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <div className="overflow-x-auto">
          <table className="w-full">
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
              {filteredData.map((item, index) => (
                <tr key={item._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-gray-900 font-medium">{index + 1}</td>
                  <td className="px-6 py-4 text-gray-900 font-medium">{item.namaLengkap}</td>
                  <td className="px-6 py-4 text-gray-700">{item.namaSekolah}</td>
                  <td className="px-6 py-4 text-gray-700">{item.nomorHP}</td>
                  <td className="px-6 py-4">
                    <a href={`mailto:${item.email}`} className="text-gray-700 hover:text-green-600 underline transition-colors">
                      {item.email}
                    </a>
                  </td>
                  <td className="px-6 py-4 text-gray-700 text-center">{item.jurusan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <button className="bg-gray-100 hover:bg-gray-200 p-3 rounded-lg transition-colors">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex items-center gap-4">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors">
            Sebelumnya
          </button>
          <span className="text-gray-600 font-medium">Halaman 1 dari 5</span>
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors">
            Selanjutnya
          </button>
        </div>
        
        <button className="bg-gray-100 hover:bg-gray-200 p-3 rounded-lg transition-colors">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          </button>
      </div>
    </div>
  );
}