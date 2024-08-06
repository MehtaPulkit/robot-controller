import React from 'react';

const Robot = ({ direction }) => {
  return (
    <div className={`robot ${direction} w-10 h-10 bg-orange-500 text-white flex items-center justify-center font-bold`}>
      {direction === 'north' && '↑'}
      {direction === 'south' && '↓'}
      {direction === 'east' && '→'}
      {direction === 'west' && '←'}
    </div>
  );
};

export default Robot;
