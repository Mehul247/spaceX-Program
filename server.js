const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/spaceX-program'));
app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/spaceX-program/'}),
);
app.listen(process.env.PORT || 8080);