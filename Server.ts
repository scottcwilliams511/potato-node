// Server.ts

import { App } from "./App";
import { Request } from "./lib/Request";
import { Pokemon } from "./Pokemon";

(async function () {
    console.log('Hi Bob');
     
    let app: App = new App();

    app.express.get('/', function(req: any, res: any) {
        res.send('Hello Mom!');
    });

    app.express.listen(3000, function() {
        console.log('Example app on 3000!');
    });

    let request: Request = new Request();
    let pokemon: Pokemon = new Pokemon();
    let response: object = await request.getData('https://pokeapi.co/api/v2/pokemon/charmander/');
    pokemon.createFile(response);
    //console.log(response);
})();
