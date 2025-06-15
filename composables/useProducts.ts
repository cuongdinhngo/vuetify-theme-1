import { PRODUCTS } from '@/constants/product';

export const useProducts = () => {
  const products = ref(PRODUCTS);
  return {
    products
  }
}