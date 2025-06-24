import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';

function AppLayout() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
