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

app.post('/myPost', function(req, res) {
    console.log('post called. Returning data');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
    res.json({"testdata" : "This is data."});
});
