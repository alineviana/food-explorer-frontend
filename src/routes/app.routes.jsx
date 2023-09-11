import { Routes, Route } from 'react-router-dom';
import { Dishes } from '../pages/Dishes';
import { DishesAdmin } from '../pages/DishesAdmin';
import { EditDish } from '../pages/EditDish';
import { Home } from '../pages/Home';
import { HomeAdmin } from '../pages/HomeAdmin';
import { Menu } from '../pages/Menu';
import { MenuAdmin } from '../pages/MenuAdmin';
import { NewDish } from '../pages/NewDish';
import { Order } from '../pages/Order';
import { Favorites } from '../pages/Favorites';
import { OrderHistory } from '../pages/OrderHistory';
import { OrdersAdmin } from '../pages/OrdersAdmin';

export function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={<HomeAdmin />} />
            <Route path='/dishes/:id' element={<Dishes />} />
            <Route path='/dishesadmin/:id' element={<DishesAdmin />} />
            <Route path='/editdish/:id' element={<EditDish />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/menuadmin' element={<MenuAdmin />} />
            <Route path='/newdish' element={<NewDish />} />
            <Route path='/order' element={<Order />} />
            <Route path='/ordersadmin' element={<OrdersAdmin />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/orderhistory' element={<OrderHistory />} />
        </Routes>
    )
}