const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'pages')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.listen(5000, () => {
    console.log('Servidor Express en ejecución');
});