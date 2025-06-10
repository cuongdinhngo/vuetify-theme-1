import { faker } from '@faker-js/faker';

type MailLabel = 'Promotions' | 'Social' | 'Forums' | 'Primary';

export interface Mail {
  id: string;
  fullName: string;
  content: string;
  label: MailLabel; // Change to string, not array
  isStar: boolean;
  created_at: Date;
}

export const useMails = () => {
  const getMails = (count = 20): Mail[] => {
    const labels: MailLabel[] = ['Promotions', 'Social', 'Forums', 'Primary'];

    return Array.from({ length: count }).map(() => ({
      id: faker.string.uuid(),
      fullName: faker.person.fullName(),
      content: faker.lorem.paragraph(),
      label: faker.helpers.arrayElement(labels),
      isStar: faker.datatype.boolean(),
      created_at: faker.date.past({ years: 1 }),
    }));
  };

  return {
    getMails
  };
};