import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from '../components/AppLayout';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Shop = lazy(() => import("../components/Shop/Shop"))

// eslint-disable-next-line react-refresh/only-export-components
export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      {path : "Shop" , element : <Shop />}
    ]
  }
]);

function AppRouts() {
  return <RouterProvider router={router} />;
}

export default AppRouts;
