// app/types/pokemon.ts
// Again would be nice to get these from schema instead of writing them manually
export interface Pokemon {
  key: string;
  sprite: string;
  num: number;
  species: string;
  color: string;
  height: number;
  weight: number;
  types: PokemonType[];
}

export interface PokemonType {
  name: string;
}

export interface PokemonDetails extends Pokemon {
  abilities: {
    first: {
      name: string;
      desc: string;
    };
  };
  baseStats: {
    hp: number;
    attack: number;
    defense: number;
    specialattack: number;
    specialdefense: number;
    speed: number;
  };
}
