import fs = require('fs');

export class Pokemon {

    createFile(pokemon: object) {
        fs.writeFile('./Pokemon.json', pokemon, function(err: object) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    }

}