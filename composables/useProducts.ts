export type Categories = 'electronics' | 'furniture' | 'clothing' | 'toys' | 'books' | 'all';

export const categories = [
  {
    name: 'All',
    value: 'all' as Categories,
    icon: 'mdi-view-list'
  },
  {
    name: 'Electronics',
    value: 'electronics' as Categories,
    icon: 'mdi-laptop'
  },
  {
    name: 'Furniture',
    value: 'furniture' as Categories,
    icon: 'mdi-sofa'
  },
  {
    name: 'Clothing',
    value: 'clothing' as Categories,
    icon: 'mdi-tshirt-crew'
  },
  {
    name: 'Toys',
    value: 'toys' as Categories,
    icon: 'mdi-toy-brick'
  },
  {
    name: 'Books',
    value: 'books' as Categories,
    icon: 'mdi-book-open-page-variant'
  }
];

export const useProducts = () => {
  return {

  }
}