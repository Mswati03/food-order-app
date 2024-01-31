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
      console.log(newOrders);
    });

    // Cleanup function to unsubscribe when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);
  
    const data = [
      {
        "id": "M4XYqyFEIZdFvxLkNgvY",
        "items": [
          {
            "name": "Vegan Burger",
            "unit_amount": {
              "value": "99.25",
              "currency_code": "USD"
            }
          }
        ]
      },
      {
        "id": "NQVvk2JVy1exZzRwevTy",
        "items": [
          {
            "value": "99.32",
            "name": "Saucy Dunked Burger"
          }
        ]
      },
      {
        "id": "gcar9nbdi9KxCY5kL4fV",
        "items": [
          {
            "unit_amount": {
              "currency_code": "USD",
              "value": "59.25"
            },
            "name": "Double Burger"
          }
        ]
      },
      {
        "id": "jXbFfTx3fE9Rp4FkXS82",
        "items": [
          {
            "value": "99.32",
            "name": "Saucy Dunked Burger"
          }
        ]
      }
    ];
    
   
    

    
  
  return (
    <div>
      <h1>Order History</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Order Name</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody id="tbody">
          <td></td>
        </tbody>
        <td>{data[0].id}</td>
        <td>
          {data[0].items[0].name}
        </td>
        <td>{data[0].items[0].unit_amount.value}</td>
        <td>{data[0].items[0].unit_amount.value}</td>
      </table>
    </div>
  );
}

export default OrderHistory;