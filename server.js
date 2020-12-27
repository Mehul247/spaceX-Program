// const express = require('express');
// const path = require('path');
// const app = express();
// app.use(express.static(__dirname + '/dist/spaceX-program'));
// app.get('/*', (req, res) =>
//     res.sendFile('index.html', {root: 'dist/spaceX-program/'}),
// );
// app.listen(process.env.PORT || 8080);
const express = require('express');
const path = require('path');
const app = express();

// Serve static files....
app.use(express.static(__dirname + '/dist/spaceX-program'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/spaceX-program/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);