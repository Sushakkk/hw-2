import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import CheckBox from './components/CheckBox';
import './components/variables.css';
import CheckIcon from './components/icons/CheckIcon/CheckIcon';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App = () => {
  const examples = [
    { disabled: true, checked: true },
    { disabled: true, checked: false },
    { disabled: true, checked: undefined },
    { disabled: false, checked: true },
    { disabled: false, checked: false },
    { disabled: false, checked: undefined },
    { disabled: undefined, checked: true },
    { disabled: undefined, checked: false },
    { disabled: undefined, checked: undefined },
    { hoverDisabled: true, checked: true },
    { hoverDisabled: true, checked: false },
    { hoverDisabled: true, checked: undefined },
    { hoverDisabled: false, checked: true },
    { hoverDisabled: false, checked: false },
    { hoverDisabled: false, checked: undefined },
    { hoverDisabled: undefined, checked: true },
    { hoverDisabled: undefined, checked: false },
    { hoverDisabled: undefined, checked: undefined },
    { clickDisabled: true },
    { clickDisabled: false },
    { clickDisabled: undefined },
  ];

  return (
    <React.StrictMode>
       <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M6.66663 19.3548L16.4625 30L33.3333 11.6667" stroke="#518581" stroke-width="3.33333"/>
        </svg>
        <CheckIcon color='secondary' width={40} height={40} />
      <div style={{ padding: '20px' }}>
        <h1>Примеры Чекбоксов</h1>
        {examples.map((example, index) => {
          const { disabled, checked, hoverDisabled, clickDisabled } = example;

          // Определение состояния для checkbox
          const isChecked = checked !== undefined ? checked : false;
          const isDisabled = disabled !== undefined ? disabled : false;

          return (
            <div key={index} style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}>
              <CheckBox
                checked={isChecked}
                disabled={isDisabled || clickDisabled}
                hoverDisabled={hoverDisabled}
                onChange={(newChecked) => {
                  if (!isDisabled && !clickDisabled) {
                    console.log(`Checkbox ${index} changed to: ${newChecked}`);
                  }
                }}
              />
              <span style={{ marginLeft: '10px' }}>
                {`disabled=${isDisabled}; checked=${isChecked}; hoverDisabled=${hoverDisabled}; clickDisabled=${clickDisabled}`}
              </span>
            </div>
          );
        })}



        <CheckIcon color='secondary' width={40} height={40} />
      </div>
    </React.StrictMode>
  );
};

root.render(<App />);
