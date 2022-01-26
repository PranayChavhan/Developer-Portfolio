import React from 'react';

const Footer = () => {
  return(
      <div className='bg-gray-800'>
          <div className='md:px-28 px-5 flex justify-between items-center py-5'>
              <h1 className='font-serif'>Johnathan Specter</h1>
              <div className='flex gap-2'>
                  <a href="/">
                      <img src="/Assets/Social Icons/Twitter.svg" alt="" />
                  </a>
                  <a href="/">
                      <img src="/Assets/Social Icons/LinkedIn.svg" alt="" />
                  </a>
                  <a href="/">
                      <img src="/Assets/Social Icons/Github.svg" alt="" />
                  </a>
              </div>
          </div>
      </div>
  )
};

export default Footer;
