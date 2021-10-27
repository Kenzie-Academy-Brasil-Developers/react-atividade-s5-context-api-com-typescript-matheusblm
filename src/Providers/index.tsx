import { CartProvider } from "./Cart";
import { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}
const Providers = ({ children }: ProviderProps) => {
  return <CartProvider>{children}</CartProvider>;
};
export default Providers;
