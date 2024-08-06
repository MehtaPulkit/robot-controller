import React, { useEffect, useState } from "react";
import "./index.css";
import Grid from "./components/Grid";
import logo from "./assets/Bellroy_logo.svg";

const directions = ["north", "east", "south", "west"];

const App = () => {
  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0 });
  const [robotDirection, setRobotDirection] = useState("north");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        rotate("left");
      } else if (event.key === "ArrowRight") {
        rotate("right");
      } else if (event.key === " ") {
        moveForward();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [robotDirection]);

  const moveForward = () => {
    setRobotPosition((prev) => {
      switch (robotDirection) {
        case "north":
          return { ...prev, y: Math.max(prev.y - 1, 0) };
        case "south":
          return { ...prev, y: Math.min(prev.y + 1, 4) };
        case "east":
          return { ...prev, x: Math.min(prev.x + 1, 4) };
        case "west":
          return { ...prev, x: Math.max(prev.x - 1, 0) };
        default:
          return prev;
      }
    });
  };

  const rotate = (direction) => {
    setRobotDirection((prev) => {
      const currentIndex = directions.indexOf(prev);
      if (direction === "left") {
        return directions[(currentIndex + 3) % 4];
      } else {
        return directions[(currentIndex + 1) % 4];
      }
    });
  };

  return (
    <div className="flex flex-col items-center p-4">
      <img alt="bellroy-logo" src={logo} className="w-36" />
      <h1 className="mt-10 text-lg font-semibold">Robot Controller</h1>
      <Grid robotPosition={robotPosition} robotDirection={robotDirection} />
      <div className="flex space-x-2 mt-4">
        <button
          onClick={() => rotate("left")}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          Rotate Left
        </button>
        <button
          onClick={() => rotate("right")}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          Rotate Right
        </button>
        <button
          onClick={moveForward}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          Move Forward
        </button>
      </div>
      <div>
        <p className="text-sm mt-10"> 
          * You can also use your keyboard : left key, right key and spacebar to
          move the robot
        </p>
      </div>
    </div>
  );
};

export default App;
