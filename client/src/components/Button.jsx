import React from 'react';

const Button = ({ customClass, onClick, icon, text }) => {
  // Define the Tailwind CSS classes based on the color prop
  //const buttonClasses = `w-[${width}] h-w[${height}] bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded`;

  return (
    <button className={customClass} onClick={onClick}>
      <img src="/icons/Login/Google.png" alt="" />
      {text}
    </button>
  );
};

export default Button;