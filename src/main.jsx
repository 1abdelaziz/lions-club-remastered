import { BrowserRouter} from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/styles/index.css';
import './assets/styles/header.css';
import './assets/styles/links.css';
import './assets/styles/img.css';
import './assets/styles/cards.css';
import './assets/styles/buttons.css';
import './assets/styles/iframes.css';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)
