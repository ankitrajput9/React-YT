import React from 'react';

const Card = (props) => {
  return (
  <>
  <div className="card">
    <div className="top">
      <img src={props.logo} alt="" />
      <button>Save</button>
    </div>
    <div className="center">
      <h3>{props.company} <span>{props.date}</span></h3>
      <h2>{props.post}</h2>
      <div className="tag">
        <h3>{props.tag1}</h3>
        <h3>{props.tag2}</h3>
      </div>
    </div>
    <div className="bottom">
      <div className="pay">
        <h3>{props.pay}</h3>
        <p>{props.location}</p>
      </div>
      <button>Apply Now</button>
    </div>
  </div>
  </>
  );
}

export default Card;
