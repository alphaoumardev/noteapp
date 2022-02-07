import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App className="aa"/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();