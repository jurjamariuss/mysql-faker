let faker = require('faker');
let mysql = require('mysql');

let connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'username',
    password: 'password',
    database: 'test'
});

let data = [];

for(let i = 0; i < 10; i++) {
    data.push([
        faker.name.lastName() + faker.name.firstName(),
        faker.internet.email(),
        faker.lorem.sentence()
    ]);
}

let q = 'INSERT INTO faker (name, mail, about) VALUES ?';

connection.query(q,[data], function (err, result) {
    if (err) throw err;
});

connection.end();
