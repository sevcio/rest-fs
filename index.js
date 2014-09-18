var express = require('express');
var app = express();
var fileserver = require('./fileserver.js');

fileserver(app, "/home/user/workspace");

app.listen(3000);