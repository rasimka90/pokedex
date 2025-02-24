import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { BottomSheetView } from '@gorhom/bottom-sheet';

type SortField = 'number' | 'name' | null;
type SortOrder = 'asc' | 'desc';

interface SortComponentProps {
  sortField: SortField;
  sortOrder: SortOrder;
  setSortField: (field: SortField) => void;
  setSortOrder: (order: SortOrder) => void;
}

const RadioButton = ({ selected }: { selected: boolean }) => (
  <View style={styles.radioButtonContainer}>
    {selected && <View style={styles.radioButtonSelected} />}
  </View>
);

export const SortComponent: React.FC<SortComponentProps> = ({
  sortField,
  sortOrder,
  setSortField,
  setSortOrder,
}) => {
  return (
    <BottomSheetView style={styles.container}>
      <Text style={styles.title}>Sort by:</Text>
      <View style={styles.optionsContainer}>
        {/* No Sort Option */}
        <Pressable 
          onPress={() => setSortField(null)} 
          style={styles.option}
        >
          <RadioButton selected={sortField === null} />
          <Text>No Sort</Text>
        </Pressable>

        {/* Sort by Number */}
        <Pressable 
          onPress={() => {
            setSortField('number');
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
          }}
          style={styles.option}
        >
          <RadioButton selected={sortField === 'number'} />
          <Text>Number {sortField === 'number' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</Text>
        </Pressable>

        {/* Sort by Name */}
        <Pressable 
          onPress={() => {
            setSortField('name');
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
          }}
          style={styles.option}
        >
          <RadioButton selected={sortField === 'name'} />
          <Text>Name {sortField === 'name' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}</Text>
        </Pressable>
      </View>
    </BottomSheetView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  optionsContainer: {
    gap: 8,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#DC2626',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  radioButtonSelected: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#DC2626',
  },
});