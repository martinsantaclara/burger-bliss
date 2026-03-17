import { useContext } from 'react';
import { CartContext } from '../contexts/CartContextInstance';
import type { CartContextType } from '../contexts/CartContextInstance';

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};