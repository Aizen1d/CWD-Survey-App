import { useState, useEffect } from 'react';

const FadeLoop = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % items.length);
        setVisible(true);
      }, 500); // Change image after n milliseconds
    }, 2500); // Start fading out every n milliseconds

    return () => clearInterval(timer); // Clean up on unmount
  }, []);

  return (
    <div className={`transition-opacity ease-in duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <img className='w-[500px]' 
        src={items[index].img} 
        alt="" 
      />
      <p className='w-[538px] font-[outfit] font-[700] text-[50px] text-white text-center leading-[40px]'>
        {items[index].maintext}
      </p>
      <p className='w-[480px] mt-5 font-[roboto] font-[400] text-[20px] text-white text-center leading-[27px]'>
        {items[index].subtext}
      </p>
    </div>
  );
};

export default FadeLoop;
