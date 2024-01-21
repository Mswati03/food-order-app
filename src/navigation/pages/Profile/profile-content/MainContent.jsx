import React from 'react';
import AccountSettings from './pages/AccountSettings';
import OrderHistory from './pages/OrderHistory';
import PaymentInfo from './pages/PaymentInfo';
import CustomerSupport from './pages/CustomerSupport';

const MainContent = ({ selectedItem }) => {
  return (
    <div className="main-content">
      {selectedItem ? (
        <div>
          {selectedItem.id === 1 && <AccountSettings />}
          {selectedItem.id === 2 && <OrderHistory/>}
          {selectedItem.id === 3 && <PaymentInfo/>}
          {selectedItem.id === 4 && <CustomerSupport/>}
        </div>
      ) : (
        <p>Please select an item from the sidebar.</p>
      )}
    </div>
  );
};

export default MainContent;