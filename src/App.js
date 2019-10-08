import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
/*
  step #1: To provide redux-store to react app, react-redux exports a component 'Provider'
  - Provider component helps to register react app with redux-store
*/

import store from './redux/store'
import CakeContainer from './components/containers/CakeContainer'

function App() {
  return (
    <Provider store = { store }>
      <div className="App">
        <CakeContainer />
      </div>      
    </Provider>
    /*
      step #2: Providing/Registering react application with redux-store.
      - Provider is registered at very root level of the application.
        Hence making redux-store available to every component down the tree across application
    */
  );
}

export default App;
