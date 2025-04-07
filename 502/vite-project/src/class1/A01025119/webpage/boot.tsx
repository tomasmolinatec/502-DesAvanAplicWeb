import React from 'react';
import { createRoot } from 'react-dom/client';
import { A01025119 } from './dokyu_main';

const mount = (selector: string, Component: React.ReactNode) => {
  const el = document.querySelector(selector);
  if (el) {
    createRoot(el).render(Component);
  }
};

mount('#A01025119', (
  <React.StrictMode>
    <A01025119 />
  </React.StrictMode>
));
