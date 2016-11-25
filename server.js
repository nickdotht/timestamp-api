var express = require('express');
var app = express();
var path = require('path');

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/:time', function(req, res, next) {
    var response = {};
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var t = req.params.time;
    
    if (!isNaN(t))
        var date = new Date(t * 1000);
    var time = (isNaN(t)) ? t : months[date.getMonth()] + ' ' + String(date.getDate()) + ', ' + String(date.getFullYear());
    
    if (new Date(time) == "Invalid Date") {
        response.unix = null;
        response.natural = null;
    } else {
        response.unix = Date.parse(time) / 1000;
        response.natural = time;
    }
    res.json(response);
});

app.listen(8080, function() {
    console.log("Timestamp App listening on port 8080");
});