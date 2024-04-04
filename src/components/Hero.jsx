import React from "react";



const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <h1><span className='orange_gradient'>Summarize.Ai</span></h1> 
      </nav>

      <h1 className='head_text'>
        Summarize Articles or Websites with <br className='max-md:hidden' />
        <span className='orange_gradient '>Summarize.Ai</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summarize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries.
      </h2>

    </header>
  );
};

export default Hero;