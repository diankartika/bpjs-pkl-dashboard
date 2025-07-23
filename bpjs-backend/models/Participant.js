const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  nik: String,
  namaLengkap: String,
  tanggalLahir: String,
  nomorHP: String,
  email: String,
  kelas: String,
  jurusan: String,
  namaSekolah: String,
  durasiMagang: String,
  tanggalMulai: String,
  tanggalSelesai: String,
  lokasiPKL: String,
  namaPerusahaan: String,
  namaIbuKandung: String,
  fotoKTPUrl: String,
  fotoSelfieUrl: String,
}, { timestamps: true });

module.exports = mongoose.model('Participant', participantSchema);
