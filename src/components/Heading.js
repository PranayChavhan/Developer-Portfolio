import React from "react";


const Heading = () => {
  return (
    <div className="lg:grid lg:grid-cols-5">
      <div className="lg:col-start-1 col-end-4 lg:py-10 lg:mt-10">
        <h1 className="font-serif lg:text-7xl text-3xl font-light">
            Helping companies build better, scalable software.</h1>
        <p className="text-gray-400 tracking-wider text-lg lg:pt-5">
          Award-winning web developer and author, with over 15+ year of working
          experience with Fortune 500 companies like Apple, Google, Facebook,
          and more.
        </p>
      </div>
    </div>
  );
};

export default Heading;
