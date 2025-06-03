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
        to: '/dashboard/chat',
        counts: 10
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

export const headerNav = [
  {
    title: 'Home',
    subtitle: 'Welcome to our site',
    icon: 'mdi-home',
    to: '/',
    bgColor: 'brown-lighten-4',
    color: 'brown-darken-3'
  },
  {
    title: 'Products',
    subtitle: 'Explore our products',
    icon: 'mdi-cart',
    to: '/products',
    bgColor: 'deep-orange-lighten-4',
    color: 'deep-orange-darken-3'
  },
  {
    title: 'About Us',
    subtitle: 'Learn more about us',
    icon: 'mdi-information',
    to: '/about',
    bgColor: 'light-green-lighten-4',
    color: 'light-green-darken-3'
  },
  {
    title: 'Contact',
    subtitle: 'Get in touch with us',
    icon: 'mdi-phone',
    to: '/contact',
    bgColor: 'teal-lighten-4',
    color: 'teal-darken-3'
  },
  {
    title: 'Settings',
    subtitle: 'Adjust your preferences',
    icon: 'mdi-cog',
    to: '/settings',
    bgColor: 'light-blue-lighten-4',
    color: 'light-blue-darken-3'
  },
  {
    title: 'Help',
    subtitle: 'Need assistance?',
    icon: 'mdi-help-circle',
    to: '/help',
    bgColor: 'pink-lighten-4',
    color: 'pink-darken-3'
  },
  {
    title: 'Feedback',
    subtitle: 'Share your thoughts',
    icon: 'mdi-comment-text',
    to: '/feedback',
    bgColor: 'purple-lighten-4',
    color: 'purple-darken-3'
  },
  {
    title: 'Support',
    subtitle: 'Get support',
    icon: 'mdi-lifebuoy',
    to: '/support',
    bgColor: 'amber-lighten-4',
    color: 'amber-darken-3'
  }
];

export const quickLinks = [
  {
    title: 'Dashboard',
    icon: 'mdi-view-dashboard',
    to: '/dashboard'
  },
  {
    title: 'Reports',
    icon: 'mdi-chart-bar',
    to: '/reports'
  },
  {
    title: 'Analytics',
    icon: 'mdi-chart-line',
    to: '/analytics'
  },
  {
    title: 'Settings',
    icon: 'mdi-cog',
    to: '/settings'
  }
];