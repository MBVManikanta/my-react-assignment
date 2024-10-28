// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './styles.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
