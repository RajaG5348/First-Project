import React, { useEffect, useState } from "react";
import "../Styles/Cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    // handlePrice();
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article className="cart_section">
      <div className="cart">
        <div className="cart-title">Cart Items</div>

        {cart.map((item) => (
          <div className="cart-content">
            <div className="cart-box">
              <div className="col col-1">
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  width={50}
                  className="cart-img"
                />
                <h3>CLASSIC ZINGER BURGER</h3>
              </div>
              <div className="col col-2">
                <button onClick={() => handleChange(item, -1)}>-</button>
                <span>{item.amount}</span>
                <button onClick={() => handleChange(item, +1)}>+</button>
              </div>
              <div className="col col-3">
                <div className="cart-price">$ {item.price}</div>
                <div className="cart-amt">$ {item.price} </div>
              </div>
              <div className="col col-4">
                <div
                  className="remove"
                  role="button"
                  onClick={() => handleRemove(item.id)}
                >
                  <i class="bi bi-trash-fill"></i>
                  Remove
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="total-price-box">
        <span className="text"> Total price : </span>
        <span className="price">$ {price}</span>
      </div>
    </article>
  );
};

export default Cart;
