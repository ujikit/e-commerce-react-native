const express       = require('express');
const app           = express();
const http          = require('http');
const path          = require('path');
const bodyParser    = require("body-parser");
const cors          = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.json({
		halo: "haloo"
	})
});

var listener = app.listen(8888, function(){
  console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});
