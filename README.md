# My Project: Simple Notes API
API sederhana untuk menyimpan dan membaca catatan teks, dibangun dengan **Node.js** dan **Express**.

## Cara Menjalankan
1. Pastikan Node.js terinstal.
2. Instal dependensi: `npm install`
3. Jalankan server: `node api.js`

## Endpoint
- **POST** `/notes/:title` - Menyimpan catatan (kirim teks di body).
- **GET** `/notes/:title` - Membaca isi catatan.

