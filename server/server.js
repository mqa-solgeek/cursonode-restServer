require('./config/config.js');

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser= require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario.js'));

mongoose.connect(process.env.URLDB,{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true},function(err, res){	 
	if (err) throw err;
	console.log('Bsae de datos ONLINE');
});

app.listen(process.env.PORT, function(){
	console.log(`Escuchando el puerto ${process.env.PORT}`);
});