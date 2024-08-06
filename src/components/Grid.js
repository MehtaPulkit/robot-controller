import React from 'react';

const Grid = ({ robotPosition, robotDirection }) => {
  const gridSize = 5;
  const rows = Array(gridSize).fill(null);
  const cols = Array(gridSize).fill(null);

  return (
    <div className="grid grid-cols-5 gap-1 p-4 bg-gray-200 border-2 border-gray-300">
      {rows.map((_, rowIndex) => (
        <div className="contents" key={rowIndex}>
          {cols.map((_, colIndex) => {
            const isRobotHere = robotPosition.x === colIndex && robotPosition.y === rowIndex;
            return (
              <div
                className="flex items-center justify-center w-16 h-16 border border-gray-300 bg-white"
                key={colIndex}
              >
                {isRobotHere && (
                  <div className={`robot ${robotDirection} w-10 h-10 bg-orange-500 text-white flex items-center justify-center font-bold`}>
                    {robotDirection === 'north' && '↑'}
                    {robotDirection === 'south' && '↓'}
                    {robotDirection === 'east' && '→'}
                    {robotDirection === 'west' && '←'}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Grid;
