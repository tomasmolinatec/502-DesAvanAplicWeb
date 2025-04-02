import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { JsConceptsApp } from '../../class1/A01025119/JSconcepts';
import './main_design.css';

const Student1App = () => (
  <BrowserRouter basename="/A01025119">
    <Routes>
      <Route
        path="/"
        element={
          <div className="main-container">
            <h1 className="main-title">Pagina principal de Do Kyu (A01025119)</h1>
            <Link to="/class1" className="class1-button">
              Go to Class 1
            </Link>
          </div>
        }
      />
      <Route path="/class1" element={<JsConceptsApp />} />
    </Routes>
  </BrowserRouter>
);

if (window.location.pathname.startsWith('/A01025119')) {
  document.body.innerHTML = '';

  const studentRoot = document.createElement('div');
  studentRoot.id = 'A01025119-root';

  studentRoot.style.position = 'fixed';
  studentRoot.style.top = '0';
  studentRoot.style.left = '0';
  studentRoot.style.width = '100vw';
  studentRoot.style.height = '100vh';
  studentRoot.style.zIndex = '9999';

  document.body.appendChild(studentRoot);

  ReactDOM.createRoot(studentRoot).render(
    <React.StrictMode>
      <Student1App />
    </React.StrictMode>
  );
}
