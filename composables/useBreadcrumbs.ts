
import { routes } from '@/config/routes';

const defaultBreadcrumb ={
  title: 'General',
  name: '	dashboards',
  to: { name: 'dashboards' },
  disabled: false
};

export interface Breadcrumb {
  title: string;
  name: string;
  to: Object;
  disabled: boolean;
}

export const useBreadcrumbs = () => {
  const breadcrumbs = ref<Breadcrumb[]>([]);

  const currentRoute = computed(() => useRoute().name || '');

  const updateBreadcrumbs = () => {
    breadcrumbs.value = [] as Breadcrumb[];
    breadcrumbs.value.push(defaultBreadcrumb);
    if (currentRoute.value) {
      const foundRoute = routes.find(r => r.name === currentRoute.value);
      if (foundRoute) {
        const route: Breadcrumb = {
          ...foundRoute,
          disabled: true
        };
        breadcrumbs.value.push(route);
      }
    }
  };

  return {
    breadcrumbs,
    currentRoute,
    updateBreadcrumbs
  }
}