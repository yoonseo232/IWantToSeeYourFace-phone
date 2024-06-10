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
app.get('/message1-2.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'message1-2.html'));
});
app.get('/message2.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'message2.html'));
});
app.get('/message3.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'message3.html'));
});

app.get('/api', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api', (req, res) => {
    res.status(200).json({ message: 'check' });
    console.log(' 여부 :', req.body);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});