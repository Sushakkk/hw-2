import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import Loader from './components/Loader/Loader';
import Text from './components/Text/Text';
import CheckBox from './components/CheckBox/CheckBox';
import CheckIcon from './components/icons/CheckIcon/CheckIcon';
import ArrowDownIcon from './components/icons/ArrowDownIcon/ArrowDownIcon';
import Button from './components/Button/Button';
 

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <div>Главная страница</div>

      <CheckIcon color="accent" width={40} height={40} />
      <ArrowDownIcon color="accent" />

      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 11.6129L9.87755 18L20 7" stroke="black" stroke-width="2"/>
</svg>


<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.33563 8.74741L3.66436 7.25259L12 14.662L20.3356 7.25259L21.6644 8.74741L12 17.338L2.33563 8.74741Z" fill="black"/>
</svg>




    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
