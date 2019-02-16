// App.ts

import express from "express";
import { LocalDatabase } from "./lib/LocalDatabase";
import { Request } from "./lib/Request";

export class App {

    express: express.Application;
    database: IDatabase;
    httpRequest: Request;

    constructor() {
        // Create a new express application instance
        this.express = express();
        this.database = new LocalDatabase('./Pokemon.json');
        this.httpRequest = new Request();
    }
}
