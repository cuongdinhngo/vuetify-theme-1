import { faker } from '@faker-js/faker';

type NoteColor = 'pink' | 'purple' | 'blue' | 'green' | 'orange' | 'brown';

export interface Note {
  id: string;
  content: string;
  created_at: Date;
  color: NoteColor;
}

export const noteColors = [
  {
    value: 'pink',
    color: 'pink-darken-2',
    bgColor: 'pink-lighten-5'
  },
  {
    value: 'purple',
    color: 'purple-darken-2',
    bgColor: 'purple-lighten-5'
  },
  {
    value: 'blue',
    color: 'blue-darken-2',
    bgColor: 'blue-lighten-5'
  },
  {
    value: 'green',
    color: 'green-darken-2',
    bgColor: 'green-lighten-5'
  },
  {
    value: 'orange',
    color: 'orange-darken-2',
    bgColor: 'orange-lighten-5'
  },
  {
    value: 'brown',
    color: 'brown-darken-2',
    bgColor: 'brown-lighten-5'
  }
];

export const useNotes = () => {
  const getNotes = (count = 10): Note[] => {
    const colors: NoteColor[] = ['pink', 'purple', 'blue', 'green', 'orange', 'brown'];
    return Array.from({ length: count }).map(() => ({
      id: faker.string.uuid(),
      content: faker.lorem.sentence({ min: 3, max: 7 }),
      created_at: faker.date.past({ years: 1 }),
      color: faker.helpers.arrayElement(colors),
    }));
  };

  return {
    getNotes,
  };
}