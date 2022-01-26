import React, { useState } from "react";
import Button from "../container/Button";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <div className="flex justify-between items-center py-5">
        <div>
          <a className="font-serif text-lg" href="/">
            Johnathan Specter
          </a>
        </div>
        <div className="hidden lg:block">
          <div className="flex gap-5 text-gray-400 tracking-widest">
            <a href="/">Article</a>
            <a href="/">Charts</a>
            <a href="/">Awards</a>
            <a href="/">About</a>
          </div>
        </div>
        <div className="hidden md:block">
          <Button />
        </div>
        <div className="block sm:hidden">
          <img onClick={handleClick} src="/Assets/Hamburger Menu.svg" alt="" />
        </div>
      </div>
      <div className="block lg:hidden">
        {click ? (
          <div className="flex flex-col gap-5 text-gray-400 tracking-widest pb-5">
            <a href="/">Article</a>
            <a href="/">Charts</a>
            <a href="/">Awards</a>
            <a href="/">About</a>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Navbar;
