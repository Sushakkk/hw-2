import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import Loader from './components/Loader/Loader';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>Главная страница</div>
    <Loader size="l" />
    <Loader size="m" />
    <Loader size="s" /> 
 
  
 
  </React.StrictMode>
);
