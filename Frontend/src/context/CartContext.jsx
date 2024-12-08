import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar un producto al carrito
  const addToCart = (id, name, price, img, ingredients) => {
    console.log("Agregando pizza al carrito", id, name, price);
    setCart((prevCart) => {
      const pizzaIndex = prevCart.findIndex(pizza => pizza.id === id);
      if (pizzaIndex === -1) {
        return [
          ...prevCart,
          { id, name, price, img, ingredients, count: 1 }
        ];
      } else {
        // Si la pizza ya está en el carrito, incrementar la cantidad
        const updatedCart = [...prevCart];
        updatedCart[pizzaIndex].count += 1;
        return updatedCart;
      }
    });
  };

  // Incrementar la cantidad de una pizza
  const increaseCount = (id) => {
    setCart((prevCart) =>
      prevCart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };

  // Decrementar la cantidad de una pizza
  const decreaseCount = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  };

  // Calcular el total de la compra
  const totalPrice = cart.reduce(
    (total, pizza) => total + pizza.price * pizza.count,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseCount, decreaseCount, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
