import React, { useState } from "react";
import ThankYou from "./ThankYou";
import { useHistory, useLocation } from "react-router-dom";


const Checkout = () => {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const total = queryParams.get("total") || 0;
  

  const handleConfirmClick = () => {
    // You can add logic here to process the order, send data to a server, etc.
    setIsConfirmed(true);
  };


  const handleBackToCartClick = () => {
    history.push("/cart"); // Navigate back to the cart page
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Checkout</h2>
      {isConfirmed ? (
        <ThankYou total={total} />
      ) : (
        <div>
          {total > 0 ? ( // Check if total is greater than 0
            <div>
              <h2>Total: Rs {total}/-</h2>
              <button onClick={handleConfirmClick}>Confirm Order</button>
            </div>
          ) : (
            <p>Your cart is empty. Please add items to your cart.</p>
          )}
          <button onClick={handleBackToCartClick}>Back to Cart</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
