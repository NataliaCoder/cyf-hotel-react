import React, { useState } from "react";
import Restaurant from "./Restaurant";

const Order = () => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <div>
      <li>Pizzas: {orders}</li>
    </div>
  );
};
export default Order;
