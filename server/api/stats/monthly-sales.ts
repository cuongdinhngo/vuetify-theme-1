import { faker } from '@faker-js/faker';

export default defineEventHandler(() => {
  const salesData = [];
  const currentDate = new Date();
  for (let i = 11; i >= 0; i--) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
    salesData.push({
      month: date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' }), // e.g., "Jun 2024"
      amount: parseFloat(faker.commerce.price({ min: 1000, max: 10000, dec: 2 })), // Sales amount between $1000 and $10000
    });
  }
  return salesData;
});
