import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from '../components/AppLayout';
import { lazy } from 'react';

import Blog from '../pages/Blog/Blog';
import Contact from '../pages/Contact';
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
      {
        path : "/shop" , 
        element : <Shop />
      }
      },
      {
        path:'/blog',
        element:<Blog/>
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
]);

function AppRouts() {
  return <RouterProvider router={router} />;
}

export default AppRouts;
