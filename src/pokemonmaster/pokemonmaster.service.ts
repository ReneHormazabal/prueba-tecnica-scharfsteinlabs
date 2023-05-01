import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuidv4} from 'uuid'
import { IPokemonmaster } from 'src/common/interfaces/pokemonmaster.interface';
import { PokemonmasterDTO } from './dto/pokemonmaster.dto';
import { POKEMONMASTER } from 'src/common/models/model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import axios from 'axios';

@Injectable()
export class PokemonmasterService {
    constructor(@InjectModel(POKEMONMASTER.name) private readonly model:Model<IPokemonmaster>){
        
    }

    async create(pokemonmasterDTO:PokemonmasterDTO): Promise<IPokemonmaster>{
        const newPokemonmaster = new this.model({id: uuidv4(), ...pokemonmasterDTO});
        return await newPokemonmaster.save();
    }

    async findAll(): Promise<IPokemonmaster[]> {
        return await this.model.find()
    }

    async findOne(id:string): Promise<IPokemonmaster> {
        return await this.model.findById(id)
    }



    async findOnePokemon(idPokemon:number): Promise<string> {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${idPokemon}`,
        );
        return data.forms[0].name;
      }

    async asociatePokemon(id:string, idPokemon:number):Promise<IPokemonmaster>{
        const pokemonName = await this.findOnePokemon(idPokemon);
        const pokemons = {idPokemon: idPokemon, pokemonName: pokemonName}
        if(!pokemonName){
            throw new HttpException('Pokemon Not Found', HttpStatus.NOT_FOUND)
        }
        const newMaster =  await this.model.findOneAndUpdate({
            id:id
        },
        {
            money: 5000,
            $push: { pokemons: pokemonName }
        }, 
        {new: true, upsert: true}

        )
        return newMaster;
    }
}




