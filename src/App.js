import React from "react";
import Community from "./components/Community";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Interested from "./components/Interested";
import Logos from "./components/Logos";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="md:px-28 px-5">
        <Navbar />
        <Heading />
        <Logos />
        <Main />
      </div>
      <Community />
      <div className=" md:px-28 px-5">
        <Interested />
      </div>
      <Footer/>
    </>
  );
};

export default App;
