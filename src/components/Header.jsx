import React from 'react';

const Header = () => {
  return (
    <>
      <div className="flex justify-between p-4 bg-gradient-to-r from-indigo-500 to-teal-400 text-center text-white">
        <h1 className="font-bold  text-xl ">Notes Application</h1>
        <button className="mr-10 py-2 px-3 font-semibold rounded-lg bg-purple-800 hover:bg-purple-900 ">
          Sign Out
        </button>
      </div>
    </>
  );
};

export default Header;
