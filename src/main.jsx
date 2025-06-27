import { createRoot } from 'react-dom/client';
import './index.css';
import AppRoutes from './routes/AppRoutes';
import { ShopContextProvider } from './context/ShopContext';

createRoot(document.getElementById('root')).render(


    <ShopContextProvider>
        <AppRoutes />
    </ShopContextProvider>

);
