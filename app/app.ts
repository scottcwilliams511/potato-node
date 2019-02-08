// app.ts
import express = require('express');

// Create a new express application instance
const app: express.Application = express();

app.get('/', function(req, res) {
    res.send('Hello Mom!');
});

app.listen(3000, function() {
    console.log('Example app on 3000!');
});


function main() {
	 console.log('Hi Bob');
}

main();