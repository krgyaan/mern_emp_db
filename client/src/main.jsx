import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import Signin from './components/Signin.jsx';
import EmpList from './components/EmpList.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
    errorElement: <ErrorPage />
  },
  {
    path: "dashboard",
    element: <App />,
  },
  {
    path: "emp-list",
    element: <EmpList />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)