"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lin/app.ts
var express = require("express");
// Create a new express application instance
var app = express();
app.get('/', function (req, res) {
    res.send('Hello Mom!');
});
app.listen(3000, function () {
    console.log('Example app on 3000!');
});
