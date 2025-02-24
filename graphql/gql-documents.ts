import { gql } from "@apollo/client";

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
