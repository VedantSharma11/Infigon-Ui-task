import React from 'react'

const Progress = ({wid}) => {
  return (
    <div className='rounded-md w-[100px] bg-slate-200 h-2 inline-block mr-2'>
        <div className={`rounded-md bg-black h-2 w-[${wid}px]`}></div>
    </div>
  );
}

export default Progress;