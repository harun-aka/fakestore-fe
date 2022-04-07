// const express = require('express');
// const path = require('path');
// const app = express();
// app.use(express.static(__dirname + '/dist/fakestore-fe'));
// app.get('/*', function(req,res) {
// res.sendFile(path.join(__dirname+
// '/dist/fakestore-fe/index.html'));});
// app.listen(process.env.PORT || 8080);

function requireHTTPS(req, res, next) {
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
const express = require('express');
const app = express();
app.use(requireHTTPS);
app.use(express.static('./dist/fakestore'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/fakestore/'});
  });
  app.listen(process.env.PORT || 8080);
