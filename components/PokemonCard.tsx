import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Pokemon } from '../types/pokemon';
import { router } from 'expo-router';
import { memo } from 'react';
import { Skeletons } from '@/hooks/ImageSources';
import { textVariants } from '@/utils/styles/TextVariants';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = memo(({ pokemon }: PokemonCardProps) => {
  const handlePress = () => {
    router.push(`/pokemon/${pokemon.key}`);
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.number}>#{pokemon.num.toString().padStart(3, '0')}</Text>
        <Image
          source={pokemon.sprite ? { uri: pokemon.sprite } : Skeletons.pokemonSkeleton}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.name}>{pokemon.species}</Text>
        <View style={styles.bgBox} />
      </View>
    </Pressable>
  );
});

PokemonCard.displayName = 'PokemonCard';

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
  }
});

export default PokemonCard;