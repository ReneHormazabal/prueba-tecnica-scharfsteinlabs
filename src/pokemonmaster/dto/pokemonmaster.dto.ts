import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class PokemonmasterDTO{
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly name:string;
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    readonly pokedex:number;
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    readonly money:number;
    @ApiProperty()
    readonly pokemons: string[];

}