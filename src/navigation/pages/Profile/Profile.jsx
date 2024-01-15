import React, { useEffect, useState } from 'react';
import { Person } from '@mui/icons-material';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Update this import with your actual library

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
      {userDetails ? (
        <div className="cardd">
          <Person />
          <div className="card-body">
            <h5 className="cardd-title">{userDetails.email}</h5>
            <p className="card-text">{/* Display other user details here */}</p>
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
    </>
  );
}

export default Profile;