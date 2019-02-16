// lib/Database.ts

import fs from "fs";

export class LocalDatabase implements IDatabase {

    private filePath: string;

    public constructor(filePath: string) {
        this.filePath = filePath;
    }

    public create(json: object) {
        console.log(json);

        fs.writeFile('./Pokemon.json', JSON.stringify(json, null, 4), function(err: object) {
            if (err) {
                return console.error(err);
            }
            console.log("The file was saved!");
        });
    }
}