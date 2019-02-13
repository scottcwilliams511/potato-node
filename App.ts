// App.ts

import express from "express";
import { Database } from "./lib/Database";
import { Request } from "./lib/Request";

export class App {

    express: express.Application;
    database: Database;
    httpRequest: Request;

    constructor() {
        // Create a new express application instance
        this.express = express();
        this.database = new Database('./Pokemon.json');
        this.httpRequest = new Request();
    }
}
