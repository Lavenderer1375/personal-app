import React from 'react';
import { useState } from 'react';

const Navbar = () => {
  let [open, setOpen] = useState(false);

  return (
    <nav className="shadow-md w-full top-0 left-0">
      <div className="md:flex items-center justify-start bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font[Poppins] text-indigo-700 drop-shadow-xl">
          <span className="text-4xl text-indigo-700 mr-1 pt-2">
            <ion-icon name="logo-apple-ar"></ion-icon>
          </span>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20' : 'top-[-490px]'
          } `}
        >
          <li className="md:ml-8 text-xl md:my-0 my-7">Item 1</li>
          <li className="md:ml-8 text-xl md:my-0 my-7">Item 2</li>
          <li className="md:ml-8 text-xl md:my-0 my-7">Item 3</li>
          <li className="md:ml-8 text-xl md:my-0 my-7">Item 4</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
