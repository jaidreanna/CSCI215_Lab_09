var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log('root called. Returning index.html');
    res.sendFile(path.join(__dirname+'/index.html'));
   // res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var path = require("path");