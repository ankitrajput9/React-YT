import React from 'react';
import Card from "../card/Card"

const RightText = (props) => {
  return (
    <div id='right' className='  h-full  flex gap-10 justify-around flex-nowrap  overflow-x-auto'>
  {props.user.map((e,idx)=>{
  return <Card key={idx} id={idx} img={e.img} dec={e.dec} tag={e.btnText} color={e.color}/>
  })}
    </div>
  );
}

export default RightText;
