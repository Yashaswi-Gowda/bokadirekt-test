"use strict";

var express = require('express');
var processor = require('./processor');

var app = express();
const port = 3000;

app.get('/search', function (req, res) {
    const serviceName = req.query.service
    const lat = req.query.lat 
    const lng = req.query.lng
    if (serviceName && lat && lng) {
        processor.search(serviceName, lat, lng).then(result => res.send(result));
    } else {
        res.statusCode = 503
        res.statusMessage = 'Invalid url parameters';
        res.send('Please provide service name, latitude, and longtitude as query parameters.' + 
        'Eg: http://localhost:3000/search?service=Massage&lat=59.34411099999999&lng=18.049118499999963')
    }
});

app.listen(port, () => console.log(`Book Direct API is listening at http://localhost:${port}/`));