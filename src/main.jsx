import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './components/error/ErrorPage.jsx';
import MainPage from './MainPage.jsx';
import PageUlyanovsk from './PageUlyanovsk.jsx';

// eslint-disable-next-line react-refresh/only-export-components
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/Ulyanovsk" element={<PageUlyanovsk />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
