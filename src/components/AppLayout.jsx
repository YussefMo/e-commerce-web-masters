import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import { CartProvider } from '../context/CartContext';
import { Bounce, ToastContainer } from 'react-toastify';

function AppLayout() {
  return (
    <>
      <CartProvider>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
        <Header />
        <div>
          <Outlet />
        </div>
        <Footer />
      </CartProvider>
    </>
  );
}

export default AppLayout;
