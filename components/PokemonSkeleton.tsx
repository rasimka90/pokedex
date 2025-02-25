// app/components/PokemonSkeleton.tsx
import { Skeletons } from '@/hooks/ImageSources';
import { textVariants } from '@/utils/styles/TextVariants';
import { StyleSheet, Text, View, Image } from 'react-native';

const PokemonSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.card]}>
        <Text style={styles.number}>#999</Text>
        <Image
          source={Skeletons.pokemonSkeleton}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.name}>Pokémon Name</Text>
        <View style={styles.bgBox} />
      </View>
    </View>
  );
};

export const PokemonListSkeleton = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 24,
        justifyContent: 'center',
      }}
    >
      {Array(15)
        .fill(null)
        .map((_, index) => (
          <PokemonSkeleton key={index} />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 108,
    marginHorizontal: 8,
    marginVertical: 4,
  },

  card: {
    flex: 1,
    backgroundColor: '#fff',
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
  image: {
    width: 60,
    height: 60,
  },
  number: {
    ...textVariants.bodyCaption,
    color: '#666',
    alignSelf: 'flex-end',
  },
});

export default PokemonSkeleton;
