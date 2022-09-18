import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { StateProvider } from "./context/StateProvider";
ReactDOM.render(
 <StateProvider>
      <Router>
 
         <App/>

       </Router>

 </StateProvider>,

document.getElementById('root'))