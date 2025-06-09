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

  const getChatWithLastMessage = () => {
    return Array.from({ length: 10 }, () => ({
      id: faker.number.int({ min: 1000, max: 9999 }),
      fullName: faker.person.fullName(),
      avatar: faker.image.avatar(),
      lastMessage: faker.lorem.sentence(),
      lastMessageTime: faker.date.recent().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      isOnline: faker.datatype.boolean(),
    }));
  }

  const getMessagesByAccountId = (accountId: number = 9999) => {
    return Array.from({ length: 20 }, () => {
      const randomId = faker.number.int({ min: 1000, max: 9998 });
      const isSender9999 = faker.datatype.boolean();

      return {
        id: faker.number.int({ min: 1000, max: 9999 }),
        senderId: isSender9999 ? 9999 : randomId,
        receiverId: isSender9999 ? randomId : 9999,
        content: faker.lorem.sentence({ min: 1, max: 3 }),
        timestamp: faker.date.recent().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        isRead: faker.datatype.boolean()
      }
    });
  }

  return {
    getAccounts,
    getChatWithLastMessage,
    getMessagesByAccountId
  }
}