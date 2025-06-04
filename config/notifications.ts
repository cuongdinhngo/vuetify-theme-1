import { faker } from '@faker-js/faker';

export const NOTIFICATION_CATEGORIES = {
  GENERAL: 'general',
  ACCOUNT: 'account',
  PROJECT: 'project',
  TASK: 'task',
  COMMENT: 'comment',
  MEETING: 'meeting'
};

export const NOTIFICATION_CONFIG = [
  {
    category: NOTIFICATION_CATEGORIES.GENERAL,
    title: 'General Notifications',
    icon: 'mdi-bell',
    bgColor: 'teal-lighten-4',
    color: 'teal-darken-3'
  },
  {
    category: NOTIFICATION_CATEGORIES.ACCOUNT,
    title: 'Account Update',
    icon: 'mdi-account',
    bgColor: 'light-blue-lighten-4',
    color: 'light-blue-darken-3'
  },
  {
    category: NOTIFICATION_CATEGORIES.PROJECT,
    title: 'Project Update',
    icon: 'mdi-folder',
    bgColor: 'pink-lighten-4',
    color: 'pink-darken-3'
  },
  {
    category: NOTIFICATION_CATEGORIES.TASK,
    title: 'Task Update',
    icon: 'mdi-calendar-check',
    bgColor: 'purple-lighten-4',
    color: 'purple-darken-3'
  },
  {
    category: NOTIFICATION_CATEGORIES.MEETING,
    title: 'New Comment',
    icon: 'mdi-calendar',
    bgColor: 'amber-lighten-4',
    color: 'amber-darken-3'
  },
  {
    category: NOTIFICATION_CATEGORIES.COMMENT,
    title: 'New Meeting',
    icon: 'mdi-information',
    bgColor: 'light-green-lighten-4',
    color: 'light-green-darken-3'
  },
];

export const notifications = [
  {
    id: '1',
    type: NOTIFICATION_CATEGORIES.GENERAL,
    message: 'Welcome to the application! Explore the features and get started.',
    timestamp: faker.date.past({ years: 1 }).toISOString(),
  },
  {
    id: '2',
    type: NOTIFICATION_CATEGORIES.ACCOUNT,
    message: 'Your password will expire in 5 days. Please update it soon.',
    timestamp: faker.date.past({ days: 30 }).toISOString(),
  },
  {
    id: '3',
    type: NOTIFICATION_CATEGORIES.PROJECT,
    message: 'New project has been created: "Project Phoenix". Check it out in your dashboard.',
    timestamp: faker.date.past({ days: 7 }).toISOString(),
  },
  {
    id: '4',
    type: NOTIFICATION_CATEGORIES.TASK,
    message: 'You have a new task assigned: "Complete the documentation".',
    timestamp: faker.date.past({ days: 3 }).toISOString(),
  },
  { 
    id: '5',
    type: NOTIFICATION_CATEGORIES.COMMENT,
    message: 'New comment on your task: "Great job on the initial draft!"',
    timestamp: faker.date.past({ days: 2 }).toISOString(),
  },
  {
    id: '6',
    type: NOTIFICATION_CATEGORIES.MEETING,
    message: 'You have a meeting scheduled for tomorrow at 10 AM.',
    timestamp: faker.date.past({ days: 1 }).toISOString(),
  },
  {
    id: '7',
    type: NOTIFICATION_CATEGORIES.GENERAL,
    message: 'System maintenance scheduled for this weekend. Expect downtime from Saturday 10 PM to Sunday 2 AM.',
    timestamp: faker.date.past({ days: 14 }).toISOString(),
  },
  {
    id: '8',
    type: NOTIFICATION_CATEGORIES.ACCOUNT,
    message: 'Your account settings have been updated successfully.',
    timestamp: faker.date.past({ hours: 12 }).toISOString(),
  },
];