import { useState } from "react";

function useCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const clearCart = () => setCart([]);

  return { cart, addToCart, removeFromCart, total, clearCart };
}

export default useCart;