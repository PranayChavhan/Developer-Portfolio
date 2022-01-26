import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const MainComponent = (props) => {
    let { image, heading, paragraph } = props;
  return(
      <div>
          <img className='w-full' src={image} alt="" />
          <div className='flex items-baseline gap-2 pt-5 '>
          <h1 className='font-serif text-4xl  tracking-wide'>{heading}</h1>
          <BsArrowRight size={25}/>
          </div>
          <p className='text-gray-400 tracking-wide text-lg pt-1'>
              {paragraph}
          </p>
      </div>
  )
};

export default MainComponent;

