require('./config/config.js');

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const bodyParser= require('body-parser');
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-COntrol-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})

//Habilitar la carpeta public
app.use(express.static(path.resolve(__dirname,'../public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//configuración global de rutas
app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB,{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true},function(err, res){	 
	if (err) throw err;
	console.log('Bsae de datos ONLINE');
});

app.listen(process.env.PORT, function(){
	console.log(`Escuchando el puerto ${process.env.PORT}`);
});