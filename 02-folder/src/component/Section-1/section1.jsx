
import Navbar from './Navbar';
import Page1Context from './hero/page1Context';

const Section1 = (props) => {
  return (
    <div className=' h-screen  w-full'>
    <Navbar/>
<Page1Context user={props.user} />
    </div>
  );
}

export default Section1;
