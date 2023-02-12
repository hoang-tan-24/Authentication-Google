import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { GoogleButton } from 'react-google-button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import "./navbar.css"

const Navbar = () => {
  const { user, googleSignIn } = UserAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
  }, [user]);

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className='navbar'>
      <h1>F-Bus University</h1>
      {user?.displayName ? (
        <p></p>
      ) : (
        <div className='googleButton'>
          <GoogleButton style={{ margin: '0 auto' }} onClick={handleGoogleSignIn} />
        </div>
      )}
    </div>
  );
};

export default Navbar;