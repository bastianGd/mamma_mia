import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import FormatNumber from "@/utils/FormatNumber";
import { useUserContext } from "@/context/UserContext";
import { Button } from "react-bootstrap";
import "./Cart.css";

const Cart = () => {
  const { cart, increaseCount, decreaseCount, totalPrice } = useContext(CartContext);
  const { token } = useUserContext();

  return (
    <div className="cart mt-5">
      <h2 className="cart-title">🛒 Carrito de Compras</h2>
      <div className="cart-items">
        {cart.map((pizza) => (
          <div key={pizza.id} className="cart-item">
            <img src={pizza.img} alt={pizza.name} className="pizza-img" />
            <div className="details">
              <h3 className="pizza-name">{pizza.name}</h3>
              <p className="pizza-price">
                Precio: <strong>${FormatNumber(pizza.price)}</strong>
              </p>
              <p className="pizza-quantity">Cantidad: {pizza.count}</p>
            </div>
            <div className="controls">
              <button
                className="button decrease"
                onClick={() => decreaseCount(pizza.id)}
              >
                -
              </button>
              <button
                className="button increase"
                onClick={() => increaseCount(pizza.id)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>
          Total: <span className="total-price">${FormatNumber(totalPrice)}</span>
        </h3>
        <Button variant="success"  disabled={!token}>Pagar</Button>
      </div>
    </div>
  );
};

export default Cart;
