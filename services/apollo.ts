import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getAllPokemon: {
          keyArgs: false, // Treat all requests as modifying the same list
          merge(existing = [], incoming, { args }) {
            const offset = args?.offset || 0;
            const merged = existing.slice(0); // Clone existing array

            // Insert incoming Pokémon at the correct offset to prevent duplicates
            for (let i = 0; i < incoming.length; i++) {
              merged[offset + i] = incoming[i];
            }

            return merged;
          },
        },
      },
    },
  },
});

const link = new HttpLink({
  uri: "https://graphqlpokemon.favware.tech/v8",
});

export const client = new ApolloClient({
  cache,
  link,
  name: "graphql-pokemon-client",
  version: "1.0",
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});
