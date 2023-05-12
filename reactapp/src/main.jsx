import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/global.css';

import { Home } from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  //   <React.StrictMode> ajuda a detectar práticas potencialmente problemáticas no código
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
