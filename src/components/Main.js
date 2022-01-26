import React from 'react';
import MainComponent from '../container/MainComponent';

const Main = () => {
  return(
      <div className='md:grid grid-cols-2 gap-28'>
          <div className="col-start-1 col-end-2">
              <MainComponent
              image="/Assets/Spense.png"
              heading="Spense.com"
              paragraph="Rethinking the way writers get paid, an open-source platform designed to help
              writers focus more on writing, and less on when and how they'll get paid.
              Project in collaboration with Codewell.cc"
              />
          </div>
          <div className=" col-start-2 col-end-3 mt-10 sm:mt-0">
          <MainComponent
          image="/Assets/YelpCamp.png"
          heading="YelpCamp.com"
          paragraph="Allowing backpack travelers to perfectly plan their trip
          through an open-source platform similar to TripAdvisor. With over 1m MAU, YelpCamp has been the 
          crowd's favorite in 2021."
          />
          </div>
      </div>
  )
};

export default Main;
