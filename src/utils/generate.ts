import uuid from 'react-native-uuid';
import type { CardData } from '../types';

const PALETTE = ['#FFB3BA', '#FFDFBA', '#FFFFBA', '#BAFFC9', '#BAE1FF', '#E2BAFF', '#FFC9DE', '#C9F0FF'];

const TEXT =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit non labore et ullam, amet dolores repellendus fuga necessitatibus cumque est dolorem itaque ipsum provident corrupti incidunt. Numquam expedita consequuntur alias.';

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateRandomCard = (cardNumber: number): CardData => {
  return {
    id: uuid.v4(),
    title: `Card №${cardNumber}`,
    color: PALETTE[getRandomInt(0, PALETTE.length - 1)],
    height: getRandomInt(90, 600),
    text: getRandomInt(1, 2) % 2 === 0 ? undefined : TEXT,
  };
};

export const INITIAL_CARDS_LIST = Array.from({ length: 30 }).map((_, index) => generateRandomCard(index + 1));
