const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Scripts

//Resource routes

app.use('/', express.static(path.resolve("src/client")));
app.use('/styles', express.static(path.resolve("src/client/styles")));
app.use('/scripts', express.static(path.resolve("src/client/scripts")));
app.use('/media', express.static(path.resolve("src/client/media")));
app.use('/fonts', express.static(path.resolve("src/client/fonts")));

//Pages routes
app.use('/landing', express.static(path.resolve("src/client/pages/landing")));

//GET pages

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve("src/client/pages/landing/index.html"));
});

//Listen

app.listen(process.env.PORT, () => {
    console.log("Server listening on:", process.env.PORT);
});