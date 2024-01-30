import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import './OrderHistory.css';

const OrderHistory = () => {
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

    // Set up real-time listener for Firestore
    const unsubscribe = firebase.firestore().collection('orders').onSnapshot((querySnapshot) => {
      const newOrders = [];
      querySnapshot.forEach((doc) => {
        newOrders.push({ id: doc.id, ...doc.data() });
      });
      setOrders(newOrders);
    });

    // Cleanup function to unsubscribe when the component unmounts
    return () => {
      unsubscribe();
    };
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
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>457</td>
              <td>$10</td>
              <td>{order.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderHistory;