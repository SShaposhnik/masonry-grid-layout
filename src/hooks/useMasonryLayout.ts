import { useMemo } from 'react';
import type { CardData } from '../types';

type Props = {
  gap: number;
  cardsList: CardData[];
  numberOfColumns: number;
};

const getSmallestColumnIndex = (list: { height: number }[]) => {
  let index = 0;
  let height = list[0].height;

  for (let i = 1; i < list.length; i++) {
    const item = list[i];

    if (item.height < height) {
      index = i;
      height = item.height;
    }
  }

  return index;
};

export const useMasonryLayout = ({ cardsList, numberOfColumns, gap }: Props) => {
  return useMemo(() => {
    const columns = Array.from({ length: numberOfColumns }).map(() => ({
      height: 0,
      list: [] as CardData[],
    }));

    for (const card of cardsList) {
      const index = getSmallestColumnIndex(columns);

      columns[index].height += card.height + gap;
      columns[index].list.push(card);
    }

    return columns.map(item => item.list);
  }, [gap, cardsList, numberOfColumns]);
};
