import React from 'react';
import './App.css';
import './components/ControlledFlow';
import DnDFlow from './components/DndFlow';

const App = () => {
  return (
    <div className='main-container'>
      <DnDFlow />
    </div>
  );
};

export default App;
