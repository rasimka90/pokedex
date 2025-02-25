import { Pokemon } from '@/types/pokemon';
import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { ActivityIndicator, RefreshControl, View } from 'react-native';
import PokemonCard from './PokemonCard';

type PokemonListProps = {
  data: Pokemon[];
  loading: boolean;
  onLoadMore: () => void;
  onRefresh: () => void;
};

export const PokemonList = ({
  data,
  loading,
  onLoadMore,
  onRefresh,
}: PokemonListProps) => {
  return (
    <View style={{ flex: 1 }}>
      <FlashList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 12, paddingTop: 24 }}
        data={data}
        renderItem={({ item }) => <PokemonCard pokemon={item} key={item.key} />}
        estimatedItemSize={108}
        numColumns={3}
        onEndReached={onLoadMore}
        onEndReachedThreshold={0.5}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
        ListFooterComponent={() =>
          loading ? (
            <View style={{ padding: 16 }}>
              <ActivityIndicator />
            </View>
          ) : null
        }
      />
    </View>
  );
};
