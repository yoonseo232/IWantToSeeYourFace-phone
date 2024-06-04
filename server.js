const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 6000;

app.use(cors());
app.use(express.json()); // JSON 파싱 미들웨어

// API 엔드포인트 설정
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server 2!' });
});

// 기본 HTML 파일 서빙
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});