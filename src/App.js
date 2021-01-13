import React from 'react';
import {connect} from 'react-redux';
import Header from './Components/Header';
import routes from './routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;
