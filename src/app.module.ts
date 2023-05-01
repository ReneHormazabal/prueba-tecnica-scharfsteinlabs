import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonmasterModule } from './pokemonmaster/pokemonmaster.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['.env'],
    isGlobal: true,
  }),MongooseModule.forRoot(process.env.URI_MONGODB, {
    useNewUrlParser: true
  }), PokemonModule, PokemonmasterModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
