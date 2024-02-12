import React, { useEffect, useState } from 'react';
import { HandymanTwoTone, History, Payment, Person, Settings, SupportAgent } from '@mui/icons-material';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Update this import with your actual library
import Header from './Header';
import { Button } from 'react-bootstrap';
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import MainContent from './profile-content/MainContent';
import PaymentInfo from './profile-content/pages/PaymentInfo';
import CustomerSupport from './profile-content/pages/CustomerSupport';
import AccountSettings from './profile-content/pages/AccountSettings';
import OrderHistory from './profile-content/pages/OrderHistory';
import UserLogo from '../../../images/user (2).png';


const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  let item;

  const items = [
    { id: 1,icon:<Settings/>, title: 'Account Settings', component: <AccountSettings/> },
    { id: 2,icon:<History/>, title: 'Order History', component: <OrderHistory/> },
    { id: 3,icon:<Payment/>, title: 'Payment Info', component : <PaymentInfo/>},
    { id: 4,icon:<SupportAgent/>, title: 'Customer Support' , component : <CustomerSupport/>}
    // Add more items as needed
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };


  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const uid = user.uid;
        const email = user.email; // You can add more properties as needed

        // Set user details in state
        setUserDetails({ uid, email });
      } else {
        // User is signed out
        setUserDetails(null);
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []); // Empty dependency array to run the effect only once on mount

  const logOut = () => {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  
    const auth = getAuth();
  
    // Pass a reference to delayer function, don't invoke it immediately
    setTimeout(delayer,3000);
  
    function delayer() {
      signOut(auth)
        .then(() => {
          navigate("/");
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        });
    }
  };
  return (

    <>
    <div >
      <Header/>
    </div>
    
    <div id='profile-wrapper' className='div-wrapper' style={{ background: '#FFFEFE',  width: 'fit-content', borderRadius: 20}}>
      {userDetails ? (
        <div className="cardd" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  width: 'fit-content' }}>
        <img style={{ width: '64px', height: '64px', borderRadius: 9999, marginTop: 20 }} src={UserLogo} />
        <div className="card-body" style={{ marginTop: 20 }}>
          {/* display user info and settings options in the profile */}
          <div
            style={{
              color: 'black',
              fontSize: 18,
              fontFamily: 'Inter',
              fontWeight: '400',
              wordWrap: 'break-word',
              textAlign: 'center',
              marginBottom: 20,
            }}>
            {userDetails.email}
          </div>
          {/*Displaying the buttons in a map to precisely display each and its info and exact function addressing upon click*/}
          {items.map((item) => (
            <div key={item.id} style={{ marginBottom: 14 ,alignItems: 'center',}}>
              <button className="btn btn-sm" onClick={() => handleItemClick(item)}>
                {item.icon} {item.title}
              </button>
            </div>
          ))}
          <div>
            <center><Button
              style={{
                background: '#FF6060',
                borderRadius: 5,
                width: 'fit-content', // Ensure button width fits its content
              }}
              onClick={logOut}>
              Log Out
            </Button>
            </center>
          </div>
        </div>
      </div>
      
      ) : (
        <p>No user signed in</p>
      )}
      
      
      
      </div>
      <div id='app' className='div-wrapper' style={{ background: '#FFFEFE', borderRadius: 20}}>

      <MainContent  id='MainContent' selectedItem={selectedItem} />
      </div>
      
      <div id="snackbar">Logged out Successfully</div>
      
    </>
  );
}

export default Profile;