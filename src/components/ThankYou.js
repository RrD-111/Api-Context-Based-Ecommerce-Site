import React from "react";

const ThankYou = ({ total }) => {
  return (
    <div className="Thanks" style={{ textAlign: "center" }}>
      <h2>Thank You for Your Purchase!</h2>
      <p>Your order has been confirmed.</p>
      <p>Total Amount: Rs {total}/-</p>
    </div>
  );
};

export default ThankYou;

