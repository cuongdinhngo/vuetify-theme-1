import { faker } from "@faker-js/faker"

export const useAccounts = () => {

  const getAccounts = () => {
    const roles = ['Head of Unit','Project Manager', 'Engineer', 'Designer', 'QA Specialist', 'Data Analyst',
      'Marketing Specialist', 'Sales Representative', 'Customer Support', 'HR Manager'
    ];
    const users = Array.from({ length: 10 }, () => ({
      id: faker.number.int({ min: 1000, max: 9999 }),
      fullName: faker.person.fullName(),
      avatar: faker.image.avatar(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      joinedDate: faker.date.past({ years: 2 }).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      role: roles[Math.floor(Math.random() * roles.length)]
    }));

    return {
      count: 100,
      data: users
    }
  }

  return {
    getAccounts,
  }
}