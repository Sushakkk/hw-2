import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import './components/variables.css';
import Input from './components/Input/Input';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App = () => {
  const [inputValue, setInputValue] = useState<string>('text');

  return (
    <React.StrictMode>
      <div style={{ margin: '50px' }}></div>

      {/* input-className=test-input; value=text; placeholder=text; disabled=true */}
      <Input
        className="test-input"
        value={inputValue}
        onChange={setInputValue}
        placeholder="text"
      />

<div style={{ margin: '50px' }}></div>


      {/* input-className=test-input; value=text; placeholder=text; disabled=false */}
      <Input
        className="test-input"
        value={inputValue}
        onChange={setInputValue}
        placeholder="text"
        disabled={false}
      />

      
    </React.StrictMode>
  );
};

root.render(<App />);
