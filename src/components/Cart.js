import React, { useEffect, useState } from "react";
import { CartState } from "../Context";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";
import "./styles.css"; // Import a CSS file for styling

const Cart = () => {
  const { cart } = CartState();
  const [total, setTotal] = useState(0); // Initialize total to 0
  const [quantity, setQuantity] = useState({}); // Initialize quantity state

  useEffect(() => {
    // Calculate the total price based on product quantities
    const newTotal = cart.reduce((acc, curr) => {
      const itemTotal = Number(curr.price) * (quantity[curr.id] || 1);
      return acc + itemTotal;
    }, 0);

    setTotal(newTotal);
  }, [cart, quantity]);

  // Function to increment the quantity of a product
  const incrementQuantity = (productId) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [productId]: (prevQuantity[productId] || 0) + 1,
    }));
  };

  // Function to decrement the quantity of a product
  const decrementQuantity = (productId) => {
    if (quantity[productId] > 1) {
      setQuantity((prevQuantity) => ({
        ...prevQuantity,
        [productId]: prevQuantity[productId] - 1,
      }));
    }
  };

  return (
    <div className="cart-container">
      <span className="cart-title">My Cart</span>
      <br />
      <span className="cart-total">Total: Rs {total}/-</span>
      <div className="productContainer">
        {cart.map((prod) => (
          <div key={prod.id} className="productItem">
            <SingleProduct prod={prod} />
            <span className="quantityButtons">
              <button onClick={() => decrementQuantity(prod.id)}>-</button>
              <span>{quantity[prod.id] || 1}</span>
              <button onClick={() => incrementQuantity(prod.id)}>+</button>
            </span>
          </div>
        ))}
      </div>
      <Link to={`/checkout?total=${total}`}>
        <button className="checkout-button">Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;

