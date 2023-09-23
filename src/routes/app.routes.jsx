import { Routes, Route } from 'react-router-dom';
import { Dishes } from '../pages/Dishes';
import { Home } from '../pages/Home';
import { Order } from '../pages/Order';
import { Favorites } from '../pages/Favorites';
import { OrderHistory } from '../pages/OrderHistory';

export function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dishes/:id' element={<Dishes />} />          
            <Route path='/order' element={<Order />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/orderhistory/:id' element={<OrderHistory />} />
        </Routes>
    )
}