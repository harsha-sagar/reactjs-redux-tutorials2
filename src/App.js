import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'

import store from './redux/store'
import CakeContainer from './components/containers/CakeContainer'
import IceCreamContainer from './components/containers/IceCreamContainer'

function App() {
  return (
    <Provider store = { store }>
      <div className="App">
        <CakeContainer />
        <IceCreamContainer />
      </div>      
    </Provider>
  );
}

export default App;
