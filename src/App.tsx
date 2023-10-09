import { useState, useEffect } from "react";
import SocialMedia from "./components/SocialMedia"
import TimePanel from "./components/TimePanel"

function App() {
  const [seconds, setSeconds] = useState(1);
  const [minutes, setMinutes] = useState(1);
  const [hours, setHours] = useState(1);
  const [days, setDays] = useState(1);
  const [timeDifference, setTimeDifference] = useState<null | number>(null);
  const [active, setActive] = useState<null | boolean >(null);
  const [intervalId, setIntervalId] = useState(0);

  let currentDate: Date = new Date();
  const finalDate: Date = new Date("2023-10-09T21:00:00")
  
  useEffect(() => {
    const initialTimeDifference = finalDate.getTime() - currentDate.getTime();
    if(initialTimeDifference < 0){
      setDays(0)
      setHours(0)
      setMinutes(0)
      setSeconds(0)
      setActive(false)
    }else{
      setDays(Math.floor(initialTimeDifference / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((initialTimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((initialTimeDifference % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((initialTimeDifference % (1000 * 60)) / 1000));
      setTimeDifference(initialTimeDifference);
      setActive(true)
    }
  }, []);

  useEffect(() => {
    if(active){
      const id = (setInterval(() => {
        currentDate = new Date();
        setTimeDifference(finalDate.getTime() - currentDate.getTime());
      }, 1000))
    setIntervalId(id)
    }
    else{
      clearInterval(intervalId)
    }
  }, [active]);
  

  useEffect(() => {
      const initialTimeDifference = finalDate.getTime() - currentDate.getTime();
      if(initialTimeDifference > 1){
        setDays(Math.floor(initialTimeDifference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((initialTimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((initialTimeDifference % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((initialTimeDifference % (1000 * 60)) / 1000));        
      }else{
        setActive(false)
      }
  }, [timeDifference]);
  
  return (
    <main className="relative flex flex-col items-center w-screen h-screen bg-top before:absolute before:w-full before:h-full before:bg-gradient-to-b before:from-almostblack before:via-verydarkblue before:to-darkblue">
      <article className="relative flex flex-col items-center mt-28">
        <h1 className="uppercase text-white text-base tracking-[5px] mx-10 text-center mb-11 font-bold">We're launching soon</h1>
        <TimePanel days={days} hours={hours} minutes={minutes} seconds={seconds}></TimePanel>
      </article>
      <div className="absolute w-screen h-screen bg-top bg-no-repeat bg-stars"></div>
      <img className="absolute bottom-0 right-0 object-cover h-1/4 w-fill object-my-position md:w-full lg:h-auto " src="/pattern-hills.svg" alt="" />
      <SocialMedia />
    </main>
  )
}

export default App
