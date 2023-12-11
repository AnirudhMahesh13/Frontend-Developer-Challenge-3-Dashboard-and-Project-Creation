// App.js
import React, { useState } from 'react';
import './App.css';
import AllSquares from './AllSquares';
import HelloWorldPage from './HelloWorldPage';

const App = () => {
  const [view, setView] = useState('AllSquares');

  console.log("yo0");
  const switchToHelloWorldPage = () => {
    console.log("yo1");
    setView('HelloWorldPage');
    console.log("yo2");
  };

  return (
    
    <div>
      {view === 'AllSquares' && <AllSquares switchToHelloWorldPage={switchToHelloWorldPage} />}
      {view === 'HelloWorldPage' && <HelloWorldPage />}
    </div>
  );
};

export default App;
