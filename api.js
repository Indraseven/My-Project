const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.text());

// 1. LIHAT SEMUA DAFTAR CATATAN
app.get('/notes', (req, res) => {
    const files = fs.readdirSync('./').filter(file => file.endsWith('.txt'));
    res.send(files.length > 0 ? files : "Belum ada catatan.");
});

// 2. BACA isi catatan spesifik
app.get('/notes/:title', (req, res) => {
    const fileName = `${req.params.title}.txt`;
    if (fs.existsSync(fileName)) {
        res.send(fs.readFileSync(fileName, 'utf8'));
    } else {
        res.status(404).send('Catatan tidak ditemukan');
    }
});

// 3. SIMPAN catatan baru (dengan pengecekan error)
app.post('/notes/:title', (req, res) => {
    const content = req.body || ""; 
    if (!content) return res.status(400).send("Isi catatan tidak boleh kosong!");
    
    fs.writeFileSync(`${req.params.title}.txt`, content);
    res.send(`Catatan '${req.params.title}' berhasil disimpan!`);
});

// 4. HAPUS catatan
app.delete('/notes/:title', (req, res) => {
    const fileName = `${req.params.title}.txt`;
    if (fs.existsSync(fileName)) {
        fs.unlinkSync(fileName);
        res.send(`Catatan '${req.params.title}' telah dihapus.`);
    } else {
        res.status(404).send('Catatan tidak ditemukan');
    }
});

app.listen(port, () => {
    console.log(`Server aktif di http://localhost:${port}`);
});

