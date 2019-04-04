const express       = require('express');
const app           = express();
const http          = require('http');
const path          = require('path');
const bodyParser    = require("body-parser");
const cors          = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(cors());

app.get('/', function (req, res) {
	res.json({
		halo: "haloo"
	})
});

var listener = app.listen(8888, function(){
  console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});
