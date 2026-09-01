import React from 'react';
import { ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
import type { CardData } from '../types';
import { CardView } from './Card';
import { useMasonryLayout } from '../hooks';

type Props = {
  cardsList: CardData[];
  numberOfColumns?: number;
};

const SCREEN_PADDING = 16;
const ITEM_PADDING = 16;

const GridBase: React.FC<Props> = ({ cardsList, numberOfColumns = 3 }) => {
  const safeNumberOfColumns = Math.max(1, numberOfColumns);
  const { width: deviceWidth } = useWindowDimensions();
  const columns = useMasonryLayout({ cardsList, numberOfColumns: safeNumberOfColumns, gap: ITEM_PADDING });

  const itemWidth = (deviceWidth - SCREEN_PADDING * 2 - ITEM_PADDING * (safeNumberOfColumns - 1)) / safeNumberOfColumns;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        {columns.map((column, index) => (
          <View key={index} style={styles.columnWrapperStyle}>
            {column.map(card => (
              <CardView key={card.id} {...card} width={itemWidth} />
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export const MasonryGrid = React.memo(GridBase);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    flexDirection: 'row',
    columnGap: ITEM_PADDING,
    paddingBottom: SCREEN_PADDING,
    paddingHorizontal: SCREEN_PADDING,
  },
  columnWrapperStyle: {
    gap: ITEM_PADDING,
  },
});
