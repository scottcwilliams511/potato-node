'use strict';

const express = require('express');
const app = express();

app.get('/', function(req, res) {
	res.send('Hi Mom');
});

app.listen(3000, function() {
	console.log('I\'m on a port (3000)!');
});

function main() {
    console.log("Hi mom");


}






main();