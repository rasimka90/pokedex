import { gql } from '@apollo/client';

// Would be cool to use codegen to get types for these queries
// As of now for example if you want to get the type of the data returned by GET_POKEMONS
// You would have to manually write the types

export const GET_POKEMONS = gql`
  query GetPokemons($offset: Int!, $take: Int!) {
    getAllPokemon(offset: $offset, take: $take) {
      key
      sprite
      num
      species
      color
      types {
        name
      }
    }
  }
`;

export const GET_POKEMON_DETAILS = gql`
  query GetPokemonDetails($pokemon: PokemonEnum!) {
    getPokemon(pokemon: $pokemon) {
      key
      sprite
      num
      species
      color
      weight
      height
      types {
        name
      }
      abilities {
        first {
          name
          desc
        }
      }
      baseStats {
        hp
        attack
        defense
        specialattack
        specialdefense
        speed
      }
    }
  }
`;
