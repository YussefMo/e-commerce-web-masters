import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from '../components/AppLayout';
import { lazy } from 'react';
import Contact from '../pages/Contact';
const Home = lazy(() => import('../pages/Home'));

// eslint-disable-next-line react-refresh/only-export-components
export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
  {
    path: 'contact',
    element: <AppLayout />,
    children: [
      {
        index : true,
        element: <Contact />
      }
    ]
  }
]);

function AppRouts() {
  return <RouterProvider router={router} />;
}

export default AppRouts;
