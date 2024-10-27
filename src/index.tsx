import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import CheckBox from './components/CheckBox';
import './components/variables.css';
import CheckIcon from './components/icons/CheckIcon/CheckIcon';
import MultiDropdown from './components/MultiDropdown/MultiDropdown';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App = () => {
  

  return (
    <React.StrictMode>
      <MultiDropdown
  options={[
    { key: 'msk', value: 'Москва' },
    { key: 'spb', value: 'Санкт-Петербург' },
    { key: 'ekb', value: 'Екатеринбург' },
  ]}
  value={[{ key: 'msk', value: 'Москва' }]}
  onChange={(newValue) => console.log('Выбрано:', newValue)}
  getTitle={(values) => (values.length === 0 ? 'Выберите город' : `Выбрано: ${values.length}`)}
/>

       

    </React.StrictMode>
  );
};

root.render(<App />);
