//libs
var express = require('express');
var uuid = require('uuid/v4');

//app
var app = express();

/*home page*/
app.get('/', function (req, res) {
    console.log(req);
    var uniqueId = uuid();
    res.send(`This is homepage. Unique id: ${uniqueId}\n`);
});

/*time*/
app.get('/time', function (req, res) {
  res.send(new Date());
});

/*start server*/
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
