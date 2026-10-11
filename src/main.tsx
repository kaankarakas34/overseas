import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import App from './App';
import './index.css';

// React 19 hoists SEO tags; remove static template copies before Helmet owns the head.
// The delivered HTML still contains these tags for clients without JavaScript.
document.head.querySelectorAll('meta[data-rh], link[data-rh]').forEach(tag => tag.remove());

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <LanguageProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  </React.StrictMode>
);
