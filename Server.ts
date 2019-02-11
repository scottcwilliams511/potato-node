// lib/Server.ts

import { App } from "./App";
import { Request } from "./Request";

async function main() {
    console.log('Hi Bob');
     
    let app: App = new App();


    app.express.get('/', function(req: any, res: any) {
        res.send('Hello Mom!');
    });

    app.express.listen(3000, function() {
        console.log('Example app on 3000!');
    });

    let request: Request = new Request();
    let response = await request.getData(new URL('https://pokeapi.co/api/v2/pokemon/ditto/'));
    console.log(response);
}

main();