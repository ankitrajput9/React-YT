import React from 'react';
import Section1 from './component/Section-1/Section1';
import Section2 from './component/Section-2/Section2';

const App = () => {
const user=[
  {
    img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG9mZmljZSUyMHdvcmtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    dec:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio atque harum molestias sed commodi! ',
    btnText:"stisfied",
    color:'blue'
  },
    {
    img:"https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG9mZmljZSUyMHdvcmtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    dec:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae praesentium maxime perferendis eveniet  eligendi!',
    btnText:"Uncover",
    color:'green'

  },  {
    img:"https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9mZmljZSUyMHdvcmtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    dec:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum maiores omnis error labore!',
    btnText:"Undergos",
    color:'yellow'

  },  {
    img:"https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9mZmljZSUyMHdvcmtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    dec:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum maiores omnis error labore!',
    btnText:"Branded",
    color:'red'

  },
]

  
  return (
    <>
    <div>
      <Section1 user={user} />
   {/* <Section2/> */}
    </div>
   
   </>
  );
}

export default App;
