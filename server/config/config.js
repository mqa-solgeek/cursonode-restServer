/*PUERTO*/
process.env.PORT = process.env.PORT || 3000;
/*PUERTO*/


/*ENTORNO*/
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
/*ENTORNO*/


/*BASE DE DATOS*/
let urlDB;

if (process.env.NODE_ENV === 'dev') {
	urlDB = 'mongodb://localhost:27017/cafe';
}else{
	urlDB = 'mongodb+srv://strider:XmuZKqVU0PBuy4ww@cluster0.8ypdc.mongodb.net/test'
}

process.env.URLDB = urlDB;
/*BASE DE DATOS*/


/*VENCIMIENTO DEL TOKEN*/
process.env.CADUCIDAD_TOKEN = 60*60*24*30;
/*VENCIMIENTO DEL TOKEN*/

/*SECRET*/
process.env.SECRET = 'esta-es-la-llave-privada';
/*SECRET*/