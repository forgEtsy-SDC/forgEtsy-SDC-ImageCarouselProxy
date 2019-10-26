const express = require('express');
const path = require('path');
const app = express();
const compression = require('compression');
const cors = require('cors');
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(express.static(path.join(__dirname, '/../public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
})

app.listen(PORT, () => {
    console.log(`Proxy is up and running on PORT:${PORT}`);
});