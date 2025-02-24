// app/pokemon/[id].tsx
import { View, Text, Image, ScrollView, StyleSheet, ActivityIndicator, Pressable } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_DETAILS } from '@/graphql/gql-documents';
import { PokemonDetails } from '@/types/pokemon';
import getBackgroundColor from '@/utils/GetTypeColor';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowBackIcon } from '@/utils/icons/ArrowBackIcon';

import { ChevronLeftIcon } from '@/utils/icons/ChevronLeftIcon';
import { PokeBallBGIcon } from '@/utils/icons/PokeBallBGIcon ';
import { ChevronRightIcon } from '@/utils/icons/ChevroRightIcon';
import { textVariants } from '@/utils/styles/TextVariants';
import { WeightIcon } from '@/utils/icons/WeightIcon';
import { StraightenIcon } from '@/utils/icons/StraightenIcon';


export default function PokemonDetailsScreen() {
  const { id } = useLocalSearchParams();
  
  const { loading, error, data } = useQuery(GET_POKEMON_DETAILS, {
    variables: { pokemon: id },
  });

  if (loading || error || !data) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const pokemon: PokemonDetails = data.getPokemon;

  const backgroundColor = getBackgroundColor(pokemon.types.map(type => type.name))

  const StatBar = ({ label, value, backgroundColor }: { label: string; value: number; backgroundColor: string }) => {
    const maxValue = 255; 
    const percentage = (value / maxValue) * 100;
    
    return (
      <View style={styles.statRow}>
        <Text style={[styles.statLabel, { color: backgroundColor }]}>{label}</Text>
        <View style={styles.statDivider} />
        <Text style={styles.statValue}>{value.toString().padStart(3, '0')}</Text>
        <View style={styles.statBarBackground}>
          <View style={[styles.statBarFill, { width: `${percentage}%`, backgroundColor }]} />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <ArrowBackIcon  />
        </Pressable>
        <Text style={styles.title}>{pokemon.species}</Text>
        <Text style={styles.number}>#{pokemon.num.toString().padStart(3, '0')}</Text>
      </View>

      <View style={styles.pokeBallBG}>
      <PokeBallBGIcon size={228} />
      </View>

      {/* Pokemon Image */}
      <View style={styles.imageContainer}>
        <ChevronLeftIcon  style={styles.prevButton} />
        <ChevronRightIcon  style={styles.nextButton} />
        <Image
          source={{ uri: pokemon.sprite }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Details Card */}
      <View style={styles.detailsCard}>
        {/* Type Tags */}
        <View style={styles.typeContainer}>
          {pokemon.types.map((type) => (
            <View 
              key={type.name} 
              style={[styles.typeTag, { backgroundColor: backgroundColor }]}
            >
              <Text style={styles.typeText}>{type.name}</Text>
            </View>
          ))}
        </View>

        {/* About Section */}
        <Text style={[styles.sectionTitle, { color: backgroundColor }]}>About</Text>
        <View style={styles.aboutContainer}>
          <View style={styles.aboutItem}>
            <View style={styles.weightContainer}>
            <WeightIcon style={{marginRight: 8}} />
            <Text style={styles.aboutValue}>{pokemon?.weight || '-'} kg</Text>
            </View>
            <Text style={styles.aboutLabel}>Weight</Text>
          </View>
          <View style={styles.aboutDivider} />
          <View style={styles.aboutItem}>
            <View style={styles.weightContainer}>
            <StraightenIcon style={{marginRight: 8}} />
            <Text style={styles.aboutValue}>{pokemon?.height || '-'}</Text>
            </View>
            <Text style={styles.aboutLabel}>Height</Text>
          </View>
          <View style={styles.aboutDivider} />
          <View style={styles.aboutItem}>
            <Text style={styles.aboutValue}>{pokemon?.abilities?.first?.name || '-'}</Text>
            <Text style={styles.aboutLabel}>Moves</Text>
          </View>
        </View>

        <Text style={styles.description}>{pokemon.abilities.first.desc || '-'}</Text>

        {/* Base Stats */}
        <Text style={[styles.sectionTitle, { color: backgroundColor }]}>Base Stats</Text>
        <View style={styles.statsContainer}>
          <StatBar label="HP" value={pokemon.baseStats.hp} backgroundColor={backgroundColor} />
          <StatBar label="ATK" value={pokemon.baseStats.attack} backgroundColor={backgroundColor} />
          <StatBar label="DEF" value={pokemon.baseStats.defense} backgroundColor={backgroundColor} />
          <StatBar label="SATK" value={pokemon.baseStats.specialattack} backgroundColor={backgroundColor} />
          <StatBar label="SDEF" value={pokemon.baseStats.specialdefense} backgroundColor={backgroundColor} />
          <StatBar label="SPD" value={pokemon.baseStats.speed} backgroundColor={backgroundColor} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  backButton: {
    marginRight: 8,
  },
  title: {
    ...textVariants.heading24,
    flex: 1,
  },
  number: {
    ...textVariants.headerSubtitle2,
  },

  pokeBallBG: {
    opacity: 0.1,
    position: 'absolute',
    top: 8,
    right:8,
    bottom: 0,
    zIndex:0,
  },

  imageContainer: {
    position: 'absolute', 
    top: '15%', 
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10, 
  },
  image: {
    width: 200,
    height: 200,
  },
  prevButton: {
    position: 'absolute',
    top: '45%',
    left: 16,
  },
  nextButton: {
    position: 'absolute',
    top: '45%',
    right: 16,
  },
  detailsCard: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-evenly',

    backgroundColor: 'white',

    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,

    paddingTop: 56,
    paddingBottom: 20,
    paddingHorizontal: 20,
    marginTop: 190,

  },
  typeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 24,
  },
  typeTag: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 12,
  },
  typeText: {
    fontSize: 10,
    fontFamily: "poppins-bold",
    lineHeight: 16,
    color: "#fff",
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: "poppins-bold",
    lineHeight: 16,
    color: "#fff",
    alignSelf: 'center',
    marginBottom: 16,
  },
  aboutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  aboutItem: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  weightContainer: {
  flexDirection: 'row',
  },
  aboutValue: {
    fontSize: 14,
    marginBottom: 12,
    textAlign: 'center',
  },
  aboutLabel: {
    fontSize: 12,
    color: '#666',
  },
  aboutDivider: {
    width: 1,
    backgroundColor: '#E0E0E0',
  },
  statDivider: {
    
    marginLeft: 8,
    marginRight: 8,
    height: '100%',
    width: 1,
    backgroundColor: '#E0E0E0',
  },
  description: {
    ...textVariants.bodyBody3,
    fontSize: 14,
    color: '#1D1D1D',
    marginBottom: 24,
    textAlign: 'justify'
  },
  statsContainer: {
    gap: 8,
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statLabel: {
    ...textVariants.headerSubtitle3,
    width: 40,
    fontSize: 12,
    textAlign: 'right',
  },
  statValue: {
    ...textVariants.bodyBody3,
    width: 30,
    fontSize: 12,
    color: '#1D1D1D',
  },
  statBarBackground: {
    flex: 1,
    height: 4,
    backgroundColor: '#F0F0F0',
    borderRadius: 2,
  },
  statBarFill: {
    height: '100%',
    borderRadius: 2,
  },
});