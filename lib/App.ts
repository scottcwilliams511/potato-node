// lib/App.ts

import express = require('express');


export class App {

    express: express.Application;

    constructor() {
        // Create a new express application instance
        this.express = express();
    }
}
