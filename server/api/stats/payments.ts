import { faker } from '@faker-js/faker';

export default defineEventHandler(() => {
  const paymentMethods = ['Credit Card', 'PayPal', 'Bank Transfer', 'Cash on Delivery'];
  const payments = [];
  const currentDate = new Date();

  for (let i = 11; i >= 0; i--) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
    const month = date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    
    // Generate 5-15 random payments per month
    const numPayments = faker.number.int({ min: 5, max: 15 });
    for (let j = 0; j < numPayments; j++) {
      payments.push({
        month,
        method: faker.helpers.arrayElement(paymentMethods),
        amount: parseFloat(faker.commerce.price({ min: 10, max: 500, dec: 2 })),
      });
    }
  }

  // Aggregate total amount by payment method
  const aggregatedData = paymentMethods.map(method => ({
    method,
    totalAmount: payments
      .filter(p => p.method === method)
      .reduce((sum, p) => sum + p.amount, 0)
      .toFixed(2),
  }));

  return aggregatedData;
});