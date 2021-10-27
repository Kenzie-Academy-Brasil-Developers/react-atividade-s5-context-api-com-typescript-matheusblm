import { createContext, ReactNode, useContext, useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface CartProps {
  children: ReactNode;
}

interface CartProviderData {
  cart: Product[];
  addToCart: (product: Product) => void;
  deleteCart: (product: Product) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const deleteCart = (product: Product) => {
    const newCart = cart.filter((item) => item.title !== product.title);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ addToCart, deleteCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
