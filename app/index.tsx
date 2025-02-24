import { useQuery } from "@apollo/client";
import { View, Text, Pressable, TouchableOpacity, StyleSheet } from "react-native";
import { useState, useCallback, useMemo, useRef } from 'react';

import { GET_POKEMONS } from "@/graphql/gql-documents";
import { Pokemon } from "@/types/pokemon";

import { SafeAreaView } from "react-native-safe-area-context";
import { PokemonListSkeleton } from "@/components/PokemonSkeleton";
import { PokeBallIcon } from "@/utils/icons/PokeBallIcon";

import { debounce } from 'lodash';
import { SearchBar } from "@/components/SearchBar";
import { PokemonList } from "@/components/PokemonList";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { SortIcon } from "@/utils/icons/SortIcon";
import { TagIcon } from "@/utils/icons/TagIcon";
import { LetterIcon } from "@/utils/icons/LetterIcon";
import { SortComponent } from "@/components/SortComponent";
import { textVariants } from "@/utils/styles/TextVariants";

const ITEMS_PER_PAGE = 21;

type SortField = 'number' | 'name' | null;
type SortOrder = 'asc' | 'desc';


export default function HomeScreen() {
  const [sortField, setSortField] = useState<SortField>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const snapPoints = useMemo(() => ['30%'], []);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const toggleBottomSheet = useCallback(() => {
    if (isBottomSheetOpen) {
      bottomSheetModalRef.current?.close();
    } else {
      bottomSheetModalRef.current?.present();
    }
    setIsBottomSheetOpen((prev) => !prev);
  }, [isBottomSheetOpen]);

  const handleSheetChanges = useCallback((index: number) => {
    setIsBottomSheetOpen(index >= 0);
  }, []);

  const handleSearch = debounce((query: string) => {
    setSearchQuery(query);
  }, 300);

  const SortIconComponent = useMemo(() => {
    if (sortField === 'name') {
      return <LetterIcon />;
    } else if (sortField === 'number') {
      return <TagIcon />;
    } else {
      return <SortIcon />;
    }
  }, [sortField]);

  const { loading, error, data, fetchMore, refetch } = useQuery(GET_POKEMONS, {
    variables: {
      offset: 0,
      take: ITEMS_PER_PAGE,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>Error loading Pokémon. Please try again.</Text>
      </View>
    );
  }

  const filteredAndSortedPokemon = useMemo(() => {
    if (!data?.getAllPokemon) return [];

    let pokemonList = [...data.getAllPokemon]
      .filter((pokemon: Pokemon) => {
        const searchLower = searchQuery.toLowerCase();
        return pokemon.species.toLowerCase().includes(searchLower) ||
          pokemon.num.toString().includes(searchQuery);
      });

    if (sortField) {
      pokemonList.sort((a: Pokemon, b: Pokemon) => {
        if (sortField === 'number') {
          return sortOrder === 'asc' ? a.num - b.num : b.num - a.num;
        } else {
          return sortOrder === 'asc'
            ? a.species.localeCompare(b.species)
            : b.species.localeCompare(a.species);
        }
      });
    }

    return pokemonList;
  }, [data, searchQuery, sortField, sortOrder]);

  const loadMore = useCallback(() => {
    if (!loading && data?.getAllPokemon) {
      fetchMore({
        variables: {
          offset: data.getAllPokemon.length,
          take: ITEMS_PER_PAGE,
        },
      });
    }
  }, [loading, data, fetchMore]);

  const onRefresh = useCallback(() => {
    refetch();
  }, [refetch]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#DC2626' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <PokeBallIcon />
            <Text style={styles.headerText}>Pokédex</Text>
          </View>

          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <SearchBar onSearch={handleSearch} />
            </View>

            <TouchableOpacity
              onPress={toggleBottomSheet}
              style={styles.sortButton}
            >
              {SortIconComponent}
            </TouchableOpacity>
          </View>
        </View>

        {loading && !data ? (
          <PokemonListSkeleton />
        ) : (
          <PokemonList data={filteredAndSortedPokemon} loading={loading} onLoadMore={loadMore} onRefresh={onRefresh} />
        )}
      </View>

      <BottomSheetModal
        snapPoints={snapPoints}
        ref={bottomSheetModalRef}
        onChange={handleSheetChanges}
      >
        <SortComponent
          sortField={sortField}
          sortOrder={sortOrder}
          setSortField={setSortField}
          setSortOrder={setSortOrder}
        />
      </BottomSheetModal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 4,
    marginBottom: 4,
  },
  header: {
    backgroundColor: '#DC2626',
    padding: 12,
    paddingBottom: 24,
    gap: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    ...textVariants.heading24,
    marginLeft: 16
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  searchBar: {
    flex: 1,
  },
  sortButton: {
    width: 44,
    height: 44,
    backgroundColor: 'white',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});