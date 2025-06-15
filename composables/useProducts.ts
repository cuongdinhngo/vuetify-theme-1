import { PRODUCTS } from '@/constants/product';
import type { Product } from '~/types/product';
import type { Category } from '~/types/category';

export const useProducts = () => {
  const products = ref(PRODUCTS);

  const get = (id: number): Product|null => {
    const product = products.value.find((product) => product.id === id);

    return product ? (product as Product) : null;
  }

  const getRelatedProducts = (category: Category): Product[] => {
    console.log('getRelatedProducts', category);
    return products.value.filter((product) => product.category === category);
  }  

  return {
    products,
    get,
    getRelatedProducts
  }
}