import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PokemonmasterService } from './pokemonmaster.service';
import { PokemonmasterDTO } from './dto/pokemonmaster.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Pokemon Master')
@Controller('api/v1/pokemonmaster')
export class PokemonmasterController {

    constructor(private readonly pokemonmasterService:PokemonmasterService){}

    @Post()
    @ApiOperation({summary: 'Create a pokemon master'})
    create(@Body() pokemonmasterDTO:PokemonmasterDTO){
        return this.pokemonmasterService.create(pokemonmasterDTO);
    }

    @Get()
    @ApiOperation({summary: 'Get All Pokemon masters'})
    findAll(){
        return this.pokemonmasterService.findAll();
    }

    @Get(':id')
    @ApiOperation({summary: 'Get One Pokemon master'})
    findOne(@Param('id') id:string){
        return this.pokemonmasterService.findOne(id);
    }

    @Put(':id/pokemon/:idPokemon')
    @ApiOperation({summary: 'Assign a pokemon to a pokemon master'})
    asociatePokemon(@Param('id') id:string, @Param('idPokemon')idPokemon:number ){
        return this.pokemonmasterService.asociatePokemon(id, idPokemon);
    }
    

}


