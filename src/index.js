import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { AppCtxProv } from './app/hooks/auth-hooks';

const WithRouter = () => (

  <BrowserRouter>
    <AppCtxProv>
      <App/>
    </AppCtxProv>
  </BrowserRouter>
  
)
//substitute original content in ReactDOM.render
ReactDOM.render(
  <WithRouter />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
