import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddCardPage from './pages/AddCardPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addcard" element={<AddCardPage />} />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import HomePage from './pages/HomePage.jsx'
// import AddCardPage from './pages/AddCardPage.jsx';

// const router = createBrowserRouter([

// {
//   path: '/',
//   element: <HomePage/>,

// },
// {
//   path: '/addcard',
//   element: <AddCardPage/>
// }

// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
