// import React from "react";
type TimeProp = {
    children: React.ReactNode,
    value: number | string
}

function TimeCell({ children, value } : TimeProp) {
  return (
    <div className="w-max flex flex-col items-center">
        <div className="w-[70px] h-16 bg-darkblue flex justify-center items-center text-4xl rounded-md relative overflow-hidden shadow-myShadow before:w-[5px] before:h-[5px] before:bg-black before:absolute before:-left-[2px] before:rounded-r-full after:w-[5px] after:h-[5px] after:bg-black after:absolute after:-right-[2px] after:rounded-l-full sm:w-20 sm:h-[85px]">
            <div className="absolute w-full h-1/2 bottom-0 bg-slate-400 opacity-10 rounded-b-md "></div>
            <span className="text-pink font-bold sm:text-5xl">{value}</span>
        </div>
        <p className="text-slate-500 font-extrabold text-[9px] mt-3 tracking-[3px] uppercase">{children}</p>
    </div>

  )
}

export default TimeCell;
