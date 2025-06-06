import { faker } from '@faker-js/faker';

const formatOption: Intl.DateTimeFormatOptions = {
   year: 'numeric',
   month: 'short'
}

interface MonthlySales {
  month: string;
  amount: number;
  method: string;
}

export const useStatistics = () => {

  const currentDate = new Date();

  const monthlySales = () => {
    const salesData = [];
    for (let i = 11; i >= 0; i--) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
      salesData.push({
        month: date.toLocaleDateString('en-US', formatOption),
        amount: parseFloat(faker.commerce.price({ min: 1000, max: 10000, dec: 2 })),
      });
    }

    return salesData;
  }

  const paymentDistribution = () => {
    const paymentMethods = ['Credit Card', 'PayPal', 'Bank Transfer', 'Cash on Delivery'];
    const payments = [] as MonthlySales[];

    for (let i = 11; i >= 0; i--) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
      const month = date.toLocaleDateString('en-US', formatOption);
      
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
  }

  const userVisits = () => {
    const visitData = [];
    for (let i = 11; i >= 0; i--) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
      const desktop = faker.number.int({ min: 1000, max: 5000 });
      const mobile = faker.number.int({ min: 2000, max: 8000 });
      const tablet = faker.number.int({ min: 500, max: 2000 });
      const total = desktop + mobile + tablet;
      visitData.push({
        month: date.toLocaleDateString('en-US', formatOption),
        total,
        desktop,
        mobile,
        tablet,
      });
    }

    return visitData;
  }

  const categoriesDistribution = () => {
    const categories = ['Electronics', 'Clothing', 'Home & Garden', 'Books'];
    const categoryData = categories.map(category => ({
      category,
      totalRevenue: parseFloat(
        faker.commerce.price({ min: 50000, max: 200000, dec: 2 })
      )
    }));

    return categoryData;
  }

  return {
    monthlySales,
    paymentDistribution,
    userVisits,
    categoriesDistribution
  }
}