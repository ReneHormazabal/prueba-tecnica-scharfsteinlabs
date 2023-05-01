import { Test, TestingModule } from '@nestjs/testing';
import { PokemonmasterService } from './pokemonmaster.service';

describe('PokemonmasterService', () => {
  let service: PokemonmasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonmasterService],
    }).compile();

    service = module.get<PokemonmasterService>(PokemonmasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
