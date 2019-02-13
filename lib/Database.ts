// lib/Database.ts

import fs from "fs";

export class Database {

    filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    create(json: Object) {
        console.log(json);

        fs.writeFile('./Pokemon.json', JSON.stringify(json, null, 4), function(err: object) {
            if (err) {
                return console.error(err);
            }
            console.log("The file was saved!");
        });
    }
}