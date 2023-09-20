import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';


const Carousel = () => {
  return (
    <>
      <h1>This is my component page</h1>
      <p>Now i am showing my creation scroll carousel</p>
      <ScrollCarousel
        autoplay
        autoplaySpeed={8}
        speed={7}
        onReady={() => console.log('I am ready')}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
          <div key={item} className='bg-blue-300/20 border-2 border-blue-300/70 rounded h-36 w-48'>
            {item}
          </div>
        ))}
      </ScrollCarousel>
    </>
  );
};

export default Carousel;