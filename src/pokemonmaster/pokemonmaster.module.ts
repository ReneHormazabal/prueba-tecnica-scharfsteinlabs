import { Module } from '@nestjs/common';
import { PokemonmasterController } from './pokemonmaster.controller';
import { PokemonmasterService } from './pokemonmaster.service';
import { PokemonMasterSchema } from './schema/pokemonmaster.schema';
import { POKEMONMASTER } from 'src/common/models/model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([{
      name:POKEMONMASTER.name,
      useFactory: () => {
        return PokemonMasterSchema;
      }
    }])
  ],
  controllers: [PokemonmasterController],
  providers: [PokemonmasterService]
})
export class PokemonmasterModule {}
