import React from 'react';

const LocalStorage = () => {
    let store={name:"ankit",
        age:"23",
        city:"Bhopal"
    }
    localStorage.setItem("user",JSON.stringify(store))

  return (
    <div>
      Hello
    </div>
  );
}

export default LocalStorage;
