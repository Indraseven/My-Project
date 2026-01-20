const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('API Express berhasil berjalan di Termux!');
});

app.listen(3000, () => {
  console.log('Server nyala di http://localhost:3000');
});

