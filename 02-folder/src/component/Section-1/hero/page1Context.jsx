

import RightText from './RightText';
import Lefttext from './Lefttext';

const Page1Context = (props) => {
  return (
    <div className='h-[85%] w-full  py-5 flex gap-8' >
<Lefttext/>
    <RightText user={props.user}/>
        </div>
  );
}

export default Page1Context;
