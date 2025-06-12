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

  const topSeller = () => {
    const sellers = Array.from({ length: 5 }, () => ({
      avatar: faker.image.avatar(),
      fullName: faker.person.fullName(),
      position: faker.person.jobTitle(),
      saleCounts: faker.number.int({ min: 50, max: 500 }),
      revenue: parseFloat(faker.commerce.price({ min: 10000, max: 100000, dec: 2 }))
    }));
    return sellers;
  }

  const dailySales = () => {
    const dailySales = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() - i);
      dailySales.push({
        day: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
        count: faker.number.int({ min: 10, max: 100 })
      });
    }
    return dailySales;
  }

  const dailyRevenue = () => {
    const dailyRevenue = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() - i);
      dailyRevenue.push({
        day: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
        count: faker.number.int({ min: 1000, max: 10000 })
      });
    }
    return dailyRevenue;
  }

  const weeklyRevenue = () => {
    const weeklyRevenue = [];
    for (let i = 7; i >= 0; i--) {
      const startDate = new Date(currentDate);
      startDate.setDate(currentDate.getDate() - (i * 7) - 6);
      const endDate = new Date(currentDate);
      endDate.setDate(currentDate.getDate() - (i * 7));
      weeklyRevenue.push({
        week: `Week ${8 - i}: ${startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`, // e.g., "Week 1: Apr 13 - Apr 19"
        revenue: parseFloat(faker.commerce.price({ min: 5000, max: 25000, dec: 2 }))
      });
    }
    return weeklyRevenue;
  }

  return {
    monthlySales,
    paymentDistribution,
    userVisits,
    categoriesDistribution,
    topSeller,
    dailySales,
    weeklyRevenue,
    dailyRevenue
  }
}