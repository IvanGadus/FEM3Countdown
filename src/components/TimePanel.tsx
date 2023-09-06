import TimeCell from "./TimeCell";

type timePanelProps ={
    seconds:number,
    minutes:number,
    hours:number,
    days:number
}

function TimePanel({ seconds, minutes, hours, days }:timePanelProps) {
  return (
    <div className=" w-full max-w-xs z-10 justify-between flex items-center sm:max-w-lg sm:justify-center sm:gap-5 ">
        <TimeCell value={days < 10? ("0" + days) : days}>Days</TimeCell>
        <TimeCell value={hours < 10? ("0" + hours) : hours}>Hours</TimeCell>
        <TimeCell value={minutes < 10? ("0" + minutes) : minutes}>Minutes</TimeCell>
        <TimeCell value={seconds < 10? ("0" + seconds) : seconds}>Seconds</TimeCell>
        
    </div>
  )
}

export default TimePanel;
