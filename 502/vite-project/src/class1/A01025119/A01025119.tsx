import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { JsConceptsApp } from './Tarea_1/JSconcepts.tsx';

document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.height = '100vh';

const centeredStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column', // so heading and button stack vertically
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100%',
  backgroundColor: '#1e1e1e',
  color: '#ffffff',
};

const headingStyle: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '1.5rem',
};

const buttonStyle: React.CSSProperties = {
  padding: '0.75rem 1.5rem',
  fontSize: '1rem',
  fontWeight: 'bold',
  backgroundColor: '#3b82f6',
  color: '#ffffff',
  border: 'none',
  borderRadius: '0.5rem',
  cursor: 'pointer',
  textDecoration: 'none', // important for <Link> styling
};

const Student1App = () => (
  <BrowserRouter basename="/A01025119">
    <Routes>
      <Route
        path="/"
        element={
          <div style={centeredStyle}>
            <h1 style={headingStyle}>Welcome to Student 1</h1>
            <Link to="/class1" style={buttonStyle}>
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
