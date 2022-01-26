import React from "react";
import Button from "../container/Button";

const Interested = () => {
  return (
    <div className="md:grid grid-cols-2 py-10">
      <div className="col-start-1 col-end-2">
        <h1 className="font-serif text-4xl  tracking-wide pb-5">Interested in working with me?</h1>
        <p className="tracking-wider text-base text-gray-400 pb-10">
          I'm active on all social media platforms listed below, but you can
          also me an email and I will get back to you within 24-48 hours.
        </p>
        <Button/>
      </div>
    </div>
  );
};

export default Interested;
