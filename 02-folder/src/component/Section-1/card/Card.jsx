import React from 'react';
import 'remixicon/fonts/remixicon.css'
import Cardcontent from './Cardcontent';

const Card = (props) => {
  return (
    <div className='h-full overflow-hidden shrink-0  relative rounded-4xl w-2/7   '>
      <img className='h-full object-cover' src={props.img} alt="" />
    <Cardcontent dec={props.dec} tag={props.tag} id={props.id} color={props.color}/>
    </div>
  );
}

export default Card;
