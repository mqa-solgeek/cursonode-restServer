/*PUERTO*/
process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

/*if (process.env.NODE_ENV === 'dev') {
	urlDB = 'mongodb://localhost:27017/cafe';
}else{*/
	urlDB = 'mongodb+srv://strider:XmuZKqVU0PBuy4ww@cluster0.8ypdc.mongodb.net/test'
//}

process.env.URLDB = urlDB;