import React from 'react';

const Cardcontent = (props) => {
  return (
    <div>
        <div className=' h-full w-full absolute top-0 left-0 p-8 flex justify-between flex-col '>
        <h1 className='text-m font-semibold h-10 w-10 rounded-full bg-amber-50 flex justify-center items-center '>{props.id+1}</h1>
        <div>
          <p className='font-semibold text-white leading-relaxed mb-8'>{props.dec}</p>
          <div className='flex justify-between'>
            <button style={{backgroundColor:props.color}} className='px-7 py-2 rounded-4xl font-semibold text-white'>{props.tag}</button>
            <button style={{backgroundColor:props.color}} className='px-3 py-2 rounded-4xl font-semibold  text-white' ><i className="ri-arrow-right-up-line "></i></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardcontent;
