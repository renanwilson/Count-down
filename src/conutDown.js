import React, { useState, useRef, useEffect } from "react";
import { Button } from "./Button";
import "./countDown.css";

export function CountDown() {
  const [num, setNum] = useState(0);
  const [pause, setPause] = useState(true);
  

  let intervalRef = useRef();

  const decreaseNum = () => setNum((prev) => prev - 1);
  const moreNum = () => setNum((prev) => prev + 1);

  useEffect(() => {
    setPause(true);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleClick = () => {
    if (!pause) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(decreaseNum, 1000);
    }
    setPause((prev) => !prev);
  };

  const handleClickMore = () => {
    if (!pause) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(moreNum, 1000);
    }
    setPause((prev) => !prev);
  };


  return (
    <>
      <div>
        {num}
        {pause ? (
          <>
          <Button onClick={handleClickMore} label='Aumentar'/>
          <Button onClick={handleClick} label='Diminuir'/>
          </>
        ) : (
          <>
          <Button onClick={() => {window.location.reload(false)}} label='Recarregar página' />            
          <Button onClick={handleClick} label='Pausar'/>
          </>
        )}
      </div>
    </>
  );
}
