import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import './index.css';
import Shell from './components/Shell';
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Shell />
    </Router>
  </Provider>, 
  document.getElementById('root')
);
