

export interface IPokemonmaster extends Document{
    id?: string;
    name:string;
    pokedex:number;
    money:number;
    pokemons: string[];
}