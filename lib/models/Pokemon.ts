// Pokemon.ts

export class Pokemon {

    public name: string = "";
    public number: number = 0;

    public constructor(pokeJson: any) {
        try {
            const json = JSON.parse(pokeJson);

            this.name = json.name;
            this.number = json.id;
        } catch (ex) {
            // handle exception...
        }
    }
}