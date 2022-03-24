import logo from './logo.svg';
import './App.css';
import React from "react";
import { StylesProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Provider } from 'react-redux';
import Routing from './routes';
import { Navbar, Spinner } from './components/shared';
import {store} from './store'
function App() {

  return (
    <StylesProvider injectFirst>
      <Provider store={store} >
      {/* <Spinner></Spinner> */}
        <Router>
          <Navbar></Navbar>
          <Routing></Routing>
        </Router>
      </Provider>
    </StylesProvider>

  );
}

export default App;
