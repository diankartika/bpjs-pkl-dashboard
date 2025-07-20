import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Filter, Download, LogOut } from 'lucide-react';

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample data - in real app this would come from API
  const registrationData = [
    {
      id: 1,
      name: "Andre Budiman",
      school: "SMKN 1 Mlati",
      phone: "081234567890",
      email: "andrebudiman@gmail.com",
      major: "Desain Komunikasi Visual"
    },
    {
      id: 2,
      name: "Andre Budiman",
      school: "SMKN 1 Mlati",
      phone: "081234567890",
      email: "andrebudiman@gmail.com",
      major: "Desain Komunikasi Visual"
    },
    {
      id: 3,
      name: "Andre Budiman",
      school: "SMKN 1 Mlati",
      phone: "081234567890",
      email: "andrebudiman@gmail.com",
      major: "Desain Komunikasi Visual"
    },
    {
      id: 4,
      name: "Andre Budiman",
      school: "SMKN 1 Mlati",
      phone: "081234567890",
      email: "andrebudiman@gmail.com",
      major: "Desain Komunikasi Visual"
    }
  ];

  const filteredData = registrationData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-green-700">Dashboard Admin</h1>
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
          <LogOut size={20} />
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
            <Download size={24} className="text-green-600" />
            <span>Export<br />data</span>
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-4 mb-6">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
          <Filter size={20} />
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
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-gray-900 font-medium">{item.id}</td>
                  <td className="px-6 py-4 text-gray-900 font-medium">{item.name}</td>
                  <td className="px-6 py-4 text-gray-700">{item.school}</td>
                  <td className="px-6 py-4 text-gray-700">{item.phone}</td>
                  <td className="px-6 py-4">
                    <a href={`mailto:${item.email}`} className="text-gray-700 hover:text-green-600 underline transition-colors">
                      {item.email}
                    </a>
                  </td>
                  <td className="px-6 py-4 text-gray-700 text-center">{item.major}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <button className="bg-gray-100 hover:bg-gray-200 p-3 rounded-lg transition-colors">
          <ChevronLeft size={20} className="text-gray-600" />
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
          <ChevronRight size={20} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
}