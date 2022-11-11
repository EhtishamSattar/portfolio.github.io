import React from "react";
import pic from "../Components/pic.jpg"

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-700">
            <div className="flex flex-1 items-start mx-6 py-2 justify-start sm:items-stretch sm:justify-start">
                <img
                  className="h-12 w-12 border "
                  src={pic}
                  alt="mypic"
                />
            </div>
          
      </nav>
    </>
  );
};

export default Navbar;
