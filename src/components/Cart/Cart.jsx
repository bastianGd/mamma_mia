import { useState } from "react";
import { pizzaCart } from "../../data/pizzas";
import FormatNumber from "../../utils/FormatNumber"
import "./Cart.css"

const Cart = () => {
  // Estado del carrito
  const [cart, setCart] = useState(pizzaCart);

  // Función para incrementar la cantidad de una pizza
  const increaseCount = (id) => {
    setCart((prevCart) =>
      prevCart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };

  // Función para decrementar la cantidad de una pizza
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
  const totalPrice = cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0);

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.map((pizza) => (
        <div key={pizza.id} className="cart-item">
          <img src={pizza.img} alt={pizza.name} className="pizza-img" />
          <div className="details">
            <h3>{pizza.name}</h3>
            <p>Precio: ${FormatNumber(pizza.price)}</p>
            <p>Cantidad: {pizza.count}</p>
          </div>
          <div className="controls">
            <button onClick={() => increaseCount(pizza.id)}>+</button>
            <button onClick={() => decreaseCount(pizza.id)}>-</button>
          </div>
        </div>
      ))}
      <div className="total">
        <h3>Total: ${FormatNumber(totalPrice)}</h3>
      </div>
      <button className="pay-button">Pagar</button>
    </div>
  );
};

export default Cart;
