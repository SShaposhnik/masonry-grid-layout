import React from 'react';
import type { CardData } from '../types';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  width: number;
} & CardData;

const CardBase: React.FC<Props> = props => {
  const { height, color, title, text, width } = props;

  return (
    <View style={[styles.container, { width, height }]}>
      <Text style={styles.title}>{title}</Text>

      <View style={[styles.banner, { backgroundColor: color }]} />

      {text ? (
        <Text style={styles.text} numberOfLines={1}>
          {text}
        </Text>
      ) : null}
    </View>
  );
};

export const CardView = React.memo(CardBase);

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  title: {
    fontSize: 16,
  },
  text: {
    fontSize: 14,
  },
  banner: {
    flex: 1,
    borderRadius: 12,
  },
});
