import { faker } from '@faker-js/faker';

export const useInvoices = () => {
  const getInvoices = () => {
    const statuses = ['Pending', 'Paid', 'Shipped', 'Delivered', 'Unpaid', 'Overdue'];

    const invoices = Array.from({ length: 10 }, () => ({
        id: faker.number.int({ min: 1000, max: 9999 }),
        billFrom: faker.person.fullName(),
        billTo: faker.person.fullName(),
        totalCost: faker.finance.amount({ min: 100, max: 1000, dec: 2 }),
        status: faker.helpers.arrayElement(statuses),
      }));

    return {
      count: 100,
      data: invoices,
    };
  }

  return {
    getInvoices
  }
}