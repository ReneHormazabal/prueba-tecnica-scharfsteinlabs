import * as mongoose from 'mongoose';

export const PokemonMasterSchema = new mongoose.Schema(
    {
        id:{type:String, required: true},
        name:{type:String, required: true},
        pokedex:{type:Number, required: true},
        money:{type:Number, required: true},
        pokemons: [String],
    },
    {timestamps:true},
)

PokemonMasterSchema.index({id:1}, {unique: true} )
PokemonMasterSchema.index({name:1}, {unique: true} )
