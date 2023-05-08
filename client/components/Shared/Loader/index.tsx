import React, { useEffect, useState } from "react";
import { ArrowDown } from "react-feather";

type Props = {
  className?: string;
};

const Loader = ({ className }: Props) => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: any = null;

    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 10);
      }, 1000);
    }

    if (count == 100) {
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(false);
    setCount(0);
  };
  return (
    <div
      className={`h-16 w-full mt-4 bg-[#323144] rounded-full p-1 ${className}`}
    >
      <div className="relative h-[56px] w-full bg-[#323144] rounded-full overflow-hidden">
        <div className="grid place-items-center absolute w-full h-full">
          <p
            className={`tracking-[20px] text-center text-white transition-all ease-in-out duration-1000 delay-[2000ms] uppercase ${
              count > 100 ? "opacity-100" : "opacity-0"
            }`}
          >
            Done
          </p>
        </div>

        <div
          className={`min-h-[56px] min-w-[56px] rounded-full grid  items-center justify-center  bg-white relative overflow-hidden transform transition-all ease-in-out duration-1000 ${
            count > 100 && `translate-x-[120%] delay-1000 `
          }`}
          style={{ width: `${count}%` }}
        >
          <p
            className={`tracking-[20px] absolute text-center w-full uppercase px-5`}
          >
            Loading
          </p>

          <div
            className={`h-[56px] w-[56px] right-0 transform transition ease-in-out duration-1000 grid justify-center items-center absolute rounded-full bg-white`}
          >
            <ArrowDown
              className={`${count > 0 ? "-rotate-90" : ""} duration-500`}
            />
          </div>
        </div>

        <div
          className={`h-[56px] w-[56px] right-0 top-0 grid justify-center items-center absolute rounded-full bg-white delay-1000 ${
            count < 100 ? "opacity-0" : "opacity-100"
          }`}
        >
          <ArrowDown className="-rotate-90" />
        </div>
      </div>

      <div>
        <h1>{`left-[${count}%]`}</h1>
        {/* {count === 100 && <p>Reached 100!</p>} */}
        {!isRunning && <button onClick={handleStart}>Start</button>}
        {isRunning && <button onClick={handleStop}>Reset</button>}
      </div>
    </div>
  );
};

export default Loader;
