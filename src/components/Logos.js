import React from "react";

const Logos = () => {
  return (
    <>
      <div className="block sm:hidden">
        <div className="flex flex-col gap-5 items-center justify-center py-20">
          <div className="flex gap-5">
            <a href="/">
              <img src="/Assets/Logos/Walmart.svg" alt="" />
            </a>
            <a href="/">
              <img src="/Assets/Logos/JP Morgan.svg" alt="" />
            </a>
          </div>
          <div className="flex gap-5">
            <a href="/">
              <img src="/Assets/Logos/Visa.svg" alt="" />
            </a>
            <a href="/">
              <img src="/Assets/Logos/Tinder.svg" alt="" />
            </a>
          </div>
          <div className="flex gap-5">
            <a href="/">
              <img src="/Assets/Logos/Samsung.svg" alt="" />
            </a>
            <a href="/">
              <img src="/Assets/Logos/Verizon.svg" alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="hidden sm:block">
      <div className="flex gap-5 items-center justify-between py-10">
            <a href="/">
              <img src="/Assets/Logos/Walmart.svg" alt="" />
            </a>
            <a href="/">
              <img src="/Assets/Logos/JP Morgan.svg" alt="" />
            </a>

            <a href="/">
              <img src="/Assets/Logos/Visa.svg" alt="" />
            </a>
            <a href="/">
              <img src="/Assets/Logos/Tinder.svg" alt="" />
            </a>

            <a href="/">
              <img src="/Assets/Logos/Samsung.svg" alt="" />
            </a>
            <a href="/">
              <img src="/Assets/Logos/Verizon.svg" alt="" />
            </a>

        </div>

      </div>
    </>
  );
};
export default Logos;
