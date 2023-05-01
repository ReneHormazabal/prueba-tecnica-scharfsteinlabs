import { Test, TestingModule } from '@nestjs/testing';
import { PokemonmasterController } from './pokemonmaster.controller';

describe('PokemonmasterController', () => {
  let controller: PokemonmasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonmasterController],
    }).compile();

    controller = module.get<PokemonmasterController>(PokemonmasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
