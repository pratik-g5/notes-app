import { useAuth0, User } from '@auth0/auth0-react';
import React from 'react';

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth0();

  const handleSignOut = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <>
      <div className="flex justify-between p-4 bg-gradient-to-r from-indigo-500 to-teal-400 text-center text-white">
        <h1 className="font-bold  text-xl ">Notes Application</h1>
        {isAuthenticated ? (
          <div className="flex">
            <h1 className="mr-2 text-black pt-2 font-semibold text-xl">
              {'Hello, ' + (user ? user.given_name : 'User') + '!'}
            </h1>
            <button
              className="mr-10 py-2 px-3 font-semibold rounded-lg bg-purple-800 hover:bg-purple-900"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <h1 className="font-semibold text-black">Hello, User!</h1>
        )}
      </div>
    </>
  );
};

export default Header;
