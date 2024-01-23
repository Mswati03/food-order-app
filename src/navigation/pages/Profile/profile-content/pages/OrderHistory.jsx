import React from "react";
import { useEffect, useState } from "react";
import './OrderHistory.css';
const OrderHistory = () =>
{

const [orders, setOrders] = useState([]);

useEffect(() => {
  // Fetch orders data from your backend or API
  // For simplicity, I'll use dummy data here

  const dummyOrders = [
    { id: 1, date: '2024-01-22', total: 50.00, status: 'Delivered' },
    { id: 2, date: '2024-01-20', total: 30.50, status: 'Shipped' },
    { id: 3, date: '2024-01-18', total: 80.25, status: 'Processing' },
  ];

  setOrders(dummyOrders);
}, []);

return (
  <div>
    <h1>Order History</h1>
    <table>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Date</th>
          <th>Total</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.date}</td>
            <td>${order.total.toFixed(2)}</td>
            <td>{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    );
}
export default OrderHistory;