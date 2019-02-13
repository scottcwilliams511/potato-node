// Pokemon.ts

export class Pokemon {

    name: string = "";
    number: number = 0;

    constructor(pokeJson: any) {
        try {
            const json = JSON.parse(pokeJson);

            this.name = json.name;
            this.number = json.id;
        } catch (ex) {
            // handle exception...
        }
    }
}