const express = require('express');
const app = express();
const ip = require('ip');
var port = 80; //default port

//GET IP ADDR
var addr = ip.address();


//host minecraft-classic folder
app.use('/', express.static('public/'));

app.listen(port);


console.log('Server started at IP:'+addr+' PORT:'+ port);
