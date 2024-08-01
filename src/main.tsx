//Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//style
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

//pages
import App from './App.tsx';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import ErrorPage from './pages/ErrorPage';
import Landing from './pages/Landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/creators',
        element: <ShowCreators />,
      },
      {
        path: '/creators/add',
        element: <AddCreator />,
      },
      {
        path: '/creators/:id',
        element: <ViewCreator />,
      },
      {
        path: '/creators/:id/edit',
        element: <EditCreator />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
