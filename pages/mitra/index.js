import { useState } from 'react';

export default function DashboardMitra() {
  const [searchTerm, setSearchTerm] = useState('');
  const [participants, setParticipants] = useState([
  ]);

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const res = await fetch('http://localhost:5050/api/participants');
        const data = await res.json();
        setParticipants(data);
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };

    fetchParticipants();
  }, []);

  const handleUpload = async (e, id) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch('http://localhost:5050/api/upload/image', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      setParticipants((prev) =>
        prev.map((p) => (p.id === id ? { ...p, photo: data.url } : p))
      );
    } catch (err) {
      console.error('Upload error:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Dashboard Mitra</h1>
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <span>→</span>
          Keluar
        </button>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46 22,3"></polygon>
          </svg>
          Filter
        </button>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Cari data"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left py-4 px-6 text-gray-600 font-medium">No</th>
              <th className="text-left py-4 px-6 text-gray-600 font-medium">Nama Peserta</th>
              <th className="text-left py-4 px-6 text-gray-600 font-medium">Sekolah</th>
              <th className="text-left py-4 px-6 text-gray-600 font-medium">No. HP</th>
              <th className="text-left py-4 px-6 text-gray-600 font-medium">Email</th>
              <th className="text-left py-4 px-6 text-gray-600 font-medium">Jurusan</th>
              <th className="text-left py-4 px-6 text-gray-600 font-medium">Foto</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((participant, index) => (
              <tr key={participant.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 text-gray-800">{participant.id}</td>
                <td className="py-4 px-6 text-gray-800 font-medium">{participant.name}</td>
                <td className="py-4 px-6 text-gray-600">{participant.school}</td>
                <td className="py-4 px-6 text-gray-600">{participant.phone}</td>
                <td className="py-4 px-6">
                  <a href={`mailto:${participant.email}`} className="text-blue-600 hover:text-blue-800 underline">
                    {participant.email}
                  </a>
                </td>
                <td className="py-4 px-6 text-gray-600 text-center">{participant.major}</td>
                <td className="py-4 px-6">
                  {participant.photo ? (
                    <img src={participant.photo} alt="Foto Peserta" className="w-16 h-16 object-cover rounded-full" />
                  ) : (
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleUpload(e, participant.id)}
                      className="text-sm"
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-6">
        <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15,18 9,12 15,6"></polyline>
          </svg>
        </button>

        <div className="flex items-center gap-4">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
            Sebelumnya
          </button>
          <span className="text-gray-600 font-medium">Halaman 1 dari 5</span>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
            Selanjutnya
          </button>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9,18 15,12 9,6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
}
