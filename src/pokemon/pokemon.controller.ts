import { Controller, Get, Param } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Pokemon')
@Controller('api/v1/pokemon')
export class PokemonController {

    constructor(private readonly pokemonService:PokemonService){

    }

    @Get(':type')
    @ApiOperation({summary: 'Get all the pokemons according to their type'})
    getPokemonByType(@Param('type') pokemonType: string){
        return this.pokemonService.getPokemonByType(pokemonType);
    }
}
