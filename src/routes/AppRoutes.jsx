import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from '../components/AppLayout';
import { lazy } from 'react';
import AboutUs from '../pages/AboutUs';

const Home = lazy(() => import('../pages/Home'));
const Cart = lazy(() => import('../pages/Cart'));
const Checkout = lazy(() => import('../pages/Checkout'));
const Blog = lazy(() => import('../pages/Blog/Blog'));
const Contact = lazy(() => import('../pages/Contact'));
const Shop = lazy(() => import('../components/Shop/Shop'));

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
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path:'/about',
        element: <AboutUs />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/checkout',
        element: <Checkout />
      },
      {
        path: '/aboutus',
        element: <AboutUs />
      }
    ]
  }
]);

function AppRouts() {
  return <RouterProvider router={router} />;
}

export default AppRouts;
