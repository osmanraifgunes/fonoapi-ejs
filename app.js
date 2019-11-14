var express = require('express');
var app = express();
app.use(express.static('public'))
var fonoapi = require('./phone-app');
//fonoapi.token = 'your_token';


app.get("/", function (req, res) {
    return fonoapi.getDevices(function (queryString, data) {
        res.render("home.ejs", { tels: JSON.stringify(data)});
    },req.query.device, req.query.brand);
});

app.listen(80, function () {
    console.log("server is listening!!!");
});
