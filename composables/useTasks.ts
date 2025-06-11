import { faker } from '@faker-js/faker'

type TaskLabel = 'Low' | 'Medium' | 'High' | 'Urgent'
type TaskStatus = 'Todo' | 'InProgress' | 'InQA' | 'Done'

export interface Task {
  id: number
  title: string
  description: string
  created_at: string
  label: TaskLabel
  duration: string
  status: TaskStatus
  owner: string
  owner_avatar: string
}

export const useTasks = () => {
  const labels: TaskLabel[] = ['Low', 'Medium', 'High', 'Urgent']
  const statuses: TaskStatus[] = ['Todo', 'InProgress', 'InQA', 'Done']

  const getTasks = (count = 10): Task[] => {
    return Array.from({ length: count }).map(() => {
      const avatarNum = faker.number.int({ min: 0, max: 9 })
      return {
        id: faker.number.int({ min: 1000, max: 9999 }),
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraphs(faker.number.int({ min: 2, max: 5 }), '\n\n'),
        created_at: faker.date.past().toISOString(),
        label: faker.helpers.arrayElement(labels),
        duration: faker.datatype.boolean()
          ? `${faker.number.int({ min: 1, max: 24 })} hours`
          : `${faker.number.int({ min: 1, max: 14 })} days`,
        status: faker.helpers.arrayElement(statuses),
        owner: faker.person.fullName(),
        owner_avatar: `https://randomuser.me/api/portraits/lego/${avatarNum}.jpg`,
      }
    })
  }

  return {
    getTasks,
  }
}