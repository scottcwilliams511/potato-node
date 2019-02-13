// Server.ts

import { App } from "./App";

import { Pokemon } from "./lib/models/Pokemon";

(async function () {
    console.log('Hi Bob');
    console.log("🐋");
     
    let app: App = new App();

    app.express.get('/', function(req: any, res: any) {
        res.send('Hello Mom!');
    });

    app.express.listen(3000, function() {
        console.log('Example app on 3000!');
    });

    let pokeJson: object = await app.httpRequest.getData('https://pokeapi.co/api/v2/pokemon/charmander/');

    const charmander: Pokemon = new Pokemon(pokeJson);
    console.log(charmander);

    app.database.create(charmander);
})();
