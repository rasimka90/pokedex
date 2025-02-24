import React, { useState, useEffect } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import { SearchIcon } from '@/utils/icons/SearchIcon';
import { debounce } from 'lodash';
import { textVariants } from '@/utils/styles/TextVariants';

type SearchBarProps = {
  onSearch: (query: string) => void;
};

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const debouncedSearch = debounce(onSearch, 300);

  useEffect(() => {
    debouncedSearch(query);
    return () => debouncedSearch.cancel();
  }, [query]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <SearchIcon />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={query}
          onChangeText={setQuery}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 16,
    height: 44,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: 44,
    height: 44,
    backgroundColor: 'white',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    ...textVariants.bodyBody3,
    color: '#666',
  
  },
});