const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Phục vụ các file tĩnh (CSS, hình ảnh...) trong thư mục public
app.use(express.static(path.join(__dirname, 'public')));

// Trang chủ
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Trang giới thiệu iPhone
app.get('/iphone', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'iphone.html'));
});

// Trang dịch vụ thay pin Molithor
app.get('/thay-pin', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'thay-pin.html'));
});

// Trang 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
  console.log(`Website đang chạy tại http://localhost:${PORT}`);
});
