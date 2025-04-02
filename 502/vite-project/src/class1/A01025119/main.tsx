import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import { JsConceptsApp } from '../A01025119/Tarea_1/JSconcepts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/concepts" element={<JsConceptsApp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
