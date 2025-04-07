import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { JsConceptsApp } from '../Tarea/JSconcepts';
import TravelRequestsPage from '../../../class2/A01025119/travel_page';
import Login from '../../../class3/A01025119/Login_page';
import TravelRequestForm from '../../../class3/A01025119/Travel_request';
import './main_design.css';
import '../../../App.css';

export const A01025119 = () => (
  <BrowserRouter basename="/src/class1/A01025119/webpage/A01025119.html">
    <Routes>
      <Route
        path="/"
        element={
          <div className="main-container">
            <h1 className="main-title">Pagina principal de Do Kyu (A01025119)</h1>
            <Link to="/class1" className="main-button">
              Class 1 Homework
            </Link>
            <br />
            <Link to="/class2" className="main-button">
              Class 2 Homework
            </Link>
            <br />
            <Link to="/class3" className="main-button">
              Class 3 Homework
            </Link>
          </div>
        }
      />
      <Route path="/class1" element={<JsConceptsApp />} />
      <Route path="/class2" element={<TravelRequestsPage />} />
      <Route path="/class3" element={<Login />} />
      <Route path="/travel-request" element={<TravelRequestForm />} />
    </Routes>
  </BrowserRouter>
);
