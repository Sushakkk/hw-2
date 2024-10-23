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

{/*   
      <Button loading={false} disabled={false} >
        <span>Модная кнопка</span>
      </Button>
      <Button loading={false} disabled={true} >
        <span>Модная кнопка</span>
      </Button>
      <Button loading={false}  >
        <span>Модная кнопка</span>
      </Button>
      <Button loading={true} disabled={false} >
        <span>Модная кнопка</span>
      </Button> */}
      <Button loading={true} disabled={true} >
        <span>Модная кнопка</span>
      </Button>

      
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
