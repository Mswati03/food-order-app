import React, { useEffect, useState } from 'react';
import { History, Payment, Person, Settings, SupportAgent } from '@mui/icons-material';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Update this import with your actual library
import Header from './Header';
import { Button } from 'react-bootstrap';


function Profile() {
  const [userDetails, setUserDetails] = useState(null);

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

  return (

    <>
    <div >
      <Header/>
    </div>
    <div id='profile-wrapper'style={{width: '100%', height: '100%', background: '#FFFEFE', borderRadius: 20}}>
      {userDetails ? (
        <div className="cardd">
          <img style={{width: '64px', height: '64px', borderRadius: 9999, marginLeft:55, marginTop:10}} src="https://via.placeholder.com/64x64"/>
          <div className="card-body">
          
          {/* display user info and settings options in the profile */}
          <div 
          style={{
            color: 'black', 
            fontSize: 18, 
            fontFamily: 'Inter', 
            fontWeight: '400', 
            wordWrap: 'break-word', 
            marginTop:20, 
            marginLeft:10,
            }}>{userDetails.email}
            </div>
          <div style={{
            color: '#060303',
            fontSize: 15,
            fontFamily: 'Inter',
            fontWeight: '400',
            wordWrap: 'break-word',
            marginTop:14,
            marginLeft:20
            }}
            > <Settings/> Account Settings</div>
            <div style={{
            color: '#060303',
            fontSize: 15,
            fontFamily: 'Inter',
            fontWeight: '400',
            wordWrap: 'break-word',
            marginTop:10,
            marginLeft:20
            }}
            > <History/> Order History
            </div>
            <div style={{
            color: '#060303',
            fontSize: 15,
            fontFamily: 'Inter',
            fontWeight: '400',
            wordWrap: 'break-word',
            marginTop:14,
            marginLeft:20
            }}
            > <Payment/> Payment Info</div>
            <div style={{
            color: '#060303',
            fontSize: 15,
            fontFamily: 'Inter',
            fontWeight: '400',
            wordWrap: 'break-word',
            marginTop:14,
            marginLeft:20
            }}
            > <SupportAgent/> Customer Support</div>
            <div>
            <Button style={{
              background: '#FF6060',
              marginTop:20,
              marginLeft: 50,
              borderRadius: 5}}>
                Log Out</Button>
              </div>
            <a href="#" className="btnd btn-primary">
              Know More
            </a>
          </div>
        </div>
      ) : (
        <p>No user signed in</p>
      )}

      <p className="mt-5 text-center">
        Get a step-by-step written explanation here:{' '}
        <a href="https://codingyaar.com/bootstrap-profile-card-1/" target="_blank">
          Bootstrap Profile Card
        </a>{' '}
      </p>

      <p className="mt-5 text-center">
        Get a step-by-step video explanation here:{' '}
        <a href="https://youtu.be/Y7vGhu3GJpg" target="_blank">
          Bootstrap Profile Card
        </a>{' '}
      </p>
      </div>
    </>
  );
}

export default Profile;