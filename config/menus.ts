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
        icon: 'mdi-view-dashboard',
        to: { name: 'dashboards' }
      },
      {
        title: 'Profile Activity',
        icon: 'mdi-account-box-multiple',
        to: { name: 'dashboards-profile-activity' }
      },
      {
        title: 'Account Settings',
        icon: 'mdi-tooltip-account',
        to: { name: 'dashboards-account-settings' }
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
        title: 'Contacts',
        icon: 'mdi-account-multiple',
        to: { name: 'dashboards-contacts' }
      },
      {
        title: 'Chat',
        icon: 'mdi-chat',
        to: { name: 'dashboards-chat' },
        counts: 10
      },
      {
        title: 'Mail',
        icon: 'mdi-email',
        to: { name: 'dashboards-mail' },
      },
      {
        title: 'Invoices',
        icon: 'mdi-file-document',
        to: { name: 'dashboards-invoices' },
      },
      {
        title: 'Notes',
        icon: 'mdi-book-multiple',
        to: { name: 'dashboards-notes' },
      },
      {
        title: 'Projects',
        icon: 'mdi-briefcase',
        subItems: [
          {
            title: 'Kanban Board',
            icon: 'mdi-view-dashboard-variant',
            to: { name: 'dashboards-projects-kanban' }
          },
          {
            title: 'Task List',
            icon: 'mdi-format-list-bulleted',
            to: { name: 'dashboards-projects-tasks' }
          },
          {
            title: 'Calendar',
            icon: 'mdi-calendar',
            to: { name: 'dashboards-projects-calendar' }
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