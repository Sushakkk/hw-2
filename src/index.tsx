import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import Loader from './components/Loader/Loader';
import Text from './components/Text/Text';
import CheckBox from './components/CheckBox/CheckBox';
import CheckIcon from './components/icons/CheckIcon/CheckIcon';
import ArrowDownIcon from './components/icons/ArrowDownIcon/ArrowDownIcon';
import Button from './components/Button/Button';
import Card from './components/Card/Card';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <div>Главная страница</div>

      <Card
    image="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
    title="Мандарин"
    subtitle="Мароккоjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr;;;;;;;;;;;;;;jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"
    onClick={() => console.log('Мандарин куплен!')}
/>

<Card
    image="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
    title="Мандарин"
    subtitle={<a href="/morocco">Марокко</a>}
    contentSlot={<>299р</>}
    actionSlot={<Button>В корзину</Button>}
/>


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
