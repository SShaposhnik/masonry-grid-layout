import React, { useCallback, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MasonryGrid } from '../components';
import { generateRandomCard, INITIAL_CARDS_LIST } from '../utils';

export const MasonryScreen: React.FC = () => {
  const [cards, setCards] = useState(INITIAL_CARDS_LIST);

  const handleAddNewCard = useCallback(() => {
    setCards(prev => [...prev, generateRandomCard(prev.length + 1)]);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <MasonryGrid cardsList={cards} />

      <View style={styles.footer}>
        <Button title="Добавить карточку" onPress={handleAddNewCard} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
});
