const express = require('express');
const app = express();

app.use(function (req, res, next) {
    console.log('url', req.url);
    next();
});

app.use(express.static('.'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
