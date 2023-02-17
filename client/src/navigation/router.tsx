import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layouts/navbar-layout';
import HomePage from 'pages/home-page';
import HousePage from 'pages/house-page';
import routes from './routes';
import HouseFormPage from '../pages/house-form-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
      {
        path: routes.HousePage,
        element: <HousePage />,
      },
      {
        path: routes.HouseCreatePage,
        element: <HouseFormPage mode="create" />,
      },
    ],
  },
]);

export default router;
