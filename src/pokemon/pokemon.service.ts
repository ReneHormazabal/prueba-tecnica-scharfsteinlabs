import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PokemonService {

    async getPokemonByType(pokemonType: string): Promise<string[]> {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/type/${pokemonType}`,
        );
        return data.pokemon;
      }
}
