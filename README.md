## 🧾 Commit Style

Untuk menjaga konsistensi penulisan commit, gunakan format berikut:

[type]: deskripsi singkat perubahan

Tipe-tipe commit yang digunakan:

- feat     : Tambah fitur baru (misalnya: halaman form, export Excel)
- fix      : Perbaikan bug
- style    : Perubahan tampilan UI (tidak memengaruhi logika/fungsi)
- refactor : Struktur ulang code tanpa mengubah output
- chore    : Setup, konfigurasi, atau file non-kode utama
- docs     : Ubah atau tambahkan dokumentasi
- init     : Inisialisasi project pertama kali

Contoh penggunaan:

git commit -m "feat: add search bar to HRD dashboard"
git commit -m "chore: setup .gitignore and README.md"
git commit -m "fix: correct typo in form validation"
