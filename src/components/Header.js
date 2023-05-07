import React from 'react';
import Switcher from './Switcher';

function Header() {
  return (
    <>
      <div className="flex justify-around py-3 bg-white dark:bg-[#1f1f1f] dark:text-gray-300">
        <h1 className="flex justify-center items-center font-bold text-2xl font-poppins">
          loremipsum.dev
        </h1>
        <Switcher />
      </div>
    </>
  )
}

export default Header;