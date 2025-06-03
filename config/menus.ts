export const drawerNavItems = [
  {
    title: 'Home',
    icon: 'mdi-home',
    to: '/',
  },
  {
    title: 'Products',
    icon: 'mdi-cart',
    to: '/products',
  },
  {
    title: 'About Us',
    icon: 'mdi-information',
    to: '/about',
  },
  {
    title: 'Contact',
    icon: 'mdi-phone',
    to: '/contact',
  },
  {
    title: 'Settings',
    icon: 'mdi-cog',
    to: '/settings',
  }
];

export const dashboardDrawerNav = [
  {
    category: 'Personal',
    items: [
      {
        title: 'General',
        icon: 'mdi-account',
        to: '/dashboard/profile'
      },
      {
        title: 'Classic',
        icon: 'mdi-view-dashboard',
        to: '/dashboard/notifications'
      },
      {
        title: 'Analytical',
        icon: 'mdi-chart-line',
        to: '/dashboard/notifications'
      },
      {
        title: 'Campaign',
        icon: 'mdi-bullhorn',
        to: '/dashboard/notifications'
      },
      {
        title: 'Front Pages',
        icon: 'mdi-home',
        subItems: [
          {
            title: 'Homepage',
            icon: 'mdi-home-outline',
            to: '/dashboard/notifications'
          },
          {
            title: 'About Us',
            icon: 'mdi-information-outline',
            to: '/dashboard/notifications'
          },
          {
            title: 'Contact Us',
            icon: 'mdi-phone-outline',
            to: '/dashboard/notifications'
          },
        ]
      }
    ]    
  },
  {
    category: 'Apps',
    items: [
      {
        title: 'Calendar',
        icon: 'mdi-calendar',
        to: '/dashboard/calendar'
      },
      {
        title: 'Chat',
        icon: 'mdi-chat',
        to: '/dashboard/chat'
      },
      {
        title: 'Mail',
        icon: 'mdi-email',
        to: '/dashboard/mail'
      },
      {
        title: 'Tasks',
        icon: 'mdi-format-list-bulleted',
        subItems: [
          {
            title: 'Task List',
            icon: 'mdi-format-list-bulleted',
            to: '/dashboard/tasks/list'
          },
          {
            title: 'Task Board',
            icon: 'mdi-view-dashboard-variant',
            to: '/dashboard/tasks/board'
          }
        ]
      }
    ]
  }
];

export const profileNav = [
  {
    title: 'Profile',
    icon: 'mdi-account',
    to: '/profile',
    color: 'indigo-darken-4'
  },
  {
    title: 'Settings',
    icon: 'mdi-cog',
    to: '/settings',
    color: 'blue-darken-4'
  },
  {
    title: 'Logout',
    icon: 'mdi-logout',
    to: '/logout',
    color: 'red-darken-4'
  }
];