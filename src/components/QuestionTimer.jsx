import React, { useEffect, useState } from 'react'  
  
export default function QuestionTimer({ timeout, onTimeout, mode }) {  
  const [remainingTime, setRemainingTime] = useState(timeout);  
  
  useEffect(() => {  
    const timer = setTimeout(() => {  
      onTimeout(0);  
    }, timeout);  
  
    return () => {  
      clearTimeout(timer);  
    };  
  }, [timeout, onTimeout]);  
  
  useEffect(() => {  
    const interval = setInterval(() => {  
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);  
    }, 100);  
  
    return () => {  
      clearInterval(interval);  
    };  
  }, []);  
  
  useEffect(() => {  
    if (remainingTime <= 0) {  
      onTimeout(0);  
    }  
  }, [remainingTime, onTimeout]);  
  
  return (  
    <progress key={timeout} id="question-time" max={timeout} value={remainingTime} className={mode}>  
      {remainingTime / 1000} seconds left  
    </progress>  
  );  
}  
