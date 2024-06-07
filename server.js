const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;
const axios = require('axios');

app.use(cors());
app.use(express.json()); // JSON 파싱 미들웨어

app.use('/images', express.static('images'))
app.use('/css', express.static('css'))
app.use('/js', express.static('js'))

// API 엔드포인트 설정
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/home.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});
app.get('/address.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'address.html'));
});
app.get('/call.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'call.html'));
});
app.get('/gallery.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'gallery.html'));
});
app.get('/home.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});
app.get('/message.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'message.html'));
});
app.get('/message1.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'message1.html'));
});
app.get('/message2.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'message2.html'));
});
app.get('/message3.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'message3.html'));
});

app.post('/send', async (req, res) => {
    try {
        const response = await axios.post('http://localhost:3000/api/receive', req.body);
        console.log('JSON sent successfully:', response.data);
        res.sendStatus(200);
    } catch (error) {
        console.error('Error sending JSON:', error.message);
        res.status(500).json({ error: 'Failed to send JSON' });
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});