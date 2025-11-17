import React from 'react';

const Getdata = () => {
  let data = JSON.parse(localStorage.getItem("user"))
  console.log(data)
  
  return (
    <div>
      
    </div>
  );
}

export default Getdata;
