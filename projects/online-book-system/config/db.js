const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'bookstore',
  });

  db.connect(function(error){
	if(error){
		throw error;
	}
	else{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = db;