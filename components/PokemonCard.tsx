import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Pokemon } from '../types/pokemon';
import { router } from 'expo-router';
import { memo } from 'react';
import { Skeletons } from '@/hooks/ImageSources';
import { textVariants } from '@/utils/styles/TextVariants';
import { Image } from 'expo-image';

interface PokemonCardProps {
  pokemon: Pokemon & {
    size: {
      x: number;
    };
  };
}

const PokemonCard = memo(
  ({ pokemon }: PokemonCardProps) => {
    const handlePress = () => {
      // Why not user <Link href="/pokemon/${pokemon.key}" asChild> instead of router.push?
      //  what are the differences between the two?
      // The difference is that router.push is a programmatic navigation, while Link is a declarative navigation.
      // The main difference is that router.push is used when you want to navigate programmatically, for example when you want to navigate after a certain action is performed.
      // On the other hand, Link is used when you want to navigate by clicking on a link.

      router.push(`/pokemon/${pokemon.key}`);
    };
    console.log('THIS RERENDER', pokemon.key);
    return (
      <Pressable onPress={handlePress} style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.number}>
            #{pokemon.num.toString().padStart(3, '0')}
          </Text>
          {/* Images are sometimes flashing in in list because there's no caching/key
        It's best to use some type of caching in a list and in general. Best option for expo
        is ExpoImage which has caching built in and it has props for controlling the recycling.
         https://docs.expo.dev/versions/latest/sdk/image/#recyclingkey
        */}
          <Image
            recyclingKey={pokemon.key}
            source={
              pokemon.sprite
                ? { uri: pokemon.sprite }
                : Skeletons.pokemonSkeleton
            }
            style={styles.image}
            contentFit="contain"
          />
          <Text style={styles.name}>{pokemon.species}</Text>
          <View style={styles.bgBox} />
        </View>
      </Pressable>
    );
  }
  // Memo only does shallow comparison, so if the pokemon object is the same, it won't re-render
  // (prevProps, nextProps) => prevProps.pokemon.key === nextProps.pokemon.key
);

PokemonCard.displayName = 'PokemonCard';

// How would you approach scalability of styles? Theme, components re-usage of styles, etc.
const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 108,
    margin: 4,
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  image: {
    width: 60,
    height: 60,
  },
  number: {
    ...textVariants.bodyCaption,
    color: '#666',
    alignSelf: 'flex-end',
  },
  name: {
    ...textVariants.bodyBody3,
    color: '#1D1D1D',
    textAlign: 'center',
  },

  bgBox: {
    zIndex: -1,
    height: 44,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#EFEFEF',
    borderRadius: 8,
  },
});

export default PokemonCard;
