import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './screens/ErrorPage.js';
import Authentication, { AuthenticationMode } from './screens/Authentication.js';
import ProtectedRoute from './components/ProtectedRoute.js';
import Home from './screens/Home.js';
import UserProvider from './context/UserProvider.js';

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage/>
  },
  {
    path: "/signin",
    element: <Authentication authenticationMode={AuthenticationMode.Login} />
  },
  {
    path: "/signup",
    element: <Authentication authenticationMode={AuthenticationMode.Register} />
  },
  {
    element: <ProtectedRoute/>,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router}/>
    </UserProvider>
  </React.StrictMode>
);