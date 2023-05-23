import React from 'react';
import Main from './components/Main/Main';
import Form from './components/Form/Form';
import './styles/reset.css'
import './App.css';

const App = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <Main />
        <Form />
      </div>
    </div>
  );
};

export default App;
