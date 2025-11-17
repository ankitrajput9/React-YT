import React from 'react';
import Getdata from './components/localstorage/Getdata';
import LocalStorage from './components/localstorage/LocalStorage';

const App = () => {
  return (
    <div>
      <LocalStorage/>
    <Getdata/>
    </div>
  );
}

export default App;