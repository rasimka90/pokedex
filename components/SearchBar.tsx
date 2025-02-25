import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { SearchIcon } from '@/utils/icons/SearchIcon';
import { debounce } from 'lodash';
import { textVariants } from '@/utils/styles/TextVariants';

type SearchBarProps = {
  onSearch: (query: string) => void;
};

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  // The debounce function is created outside of the useEffect hook,
  // which means it's created on every render of the component.
  // However, it is used as a dependancy in the useEffect hook. This can lead to unexpected behaviors.
  // More here: https://medium.com/@gabrielmickey28/using-debounce-with-react-components-f988c28f52c1#:~:text=Debounce%20lets%20us%20make%20multiple,the%20last%20call%20was%20made.

  // Would be even better to use useCallback here and write a custom hook for this
  useEffect(() => {
    const debouncedSearch = debounce(onSearch, 300);
    debouncedSearch(query);
    return () => {
      debouncedSearch.cancel();
    };
  }, [query, onSearch]);

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
