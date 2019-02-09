// lib/Server.ts

import { App } from "./App";


function main() {
    console.log('Hi Bob');
     
    let app: App = new App();

    app.express.get('/', function(req: any, res: any) {
        res.send('Hello Mom!');
    });

    app.express.listen(3000, function() {
        console.log('Example app on 3000!');
    });
}

main();