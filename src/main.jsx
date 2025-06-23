import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppRouts from './routes/AppRouts';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouts />
  </StrictMode>
);
