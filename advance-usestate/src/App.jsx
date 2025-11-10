import React, { useState } from 'react';

const App = () => {
const [inputval, setInputval] = useState({
  user:"",

})
const handleChange = (e)=>{
setInputval({user:e.target.value})
}


  const handleSubmit=(e)=>{
    e.preventDefault()
   console.log(inputval)
  }
  return (
    <div>
   <form onSubmit={handleSubmit} >
    <input  
    value={inputval.user}
    onChange={handleChange}
    type="text" 
    placeholder='Enter your Name'/>
<button  >submit</button>
   </form>
    </div>
  );
}

export default App;
