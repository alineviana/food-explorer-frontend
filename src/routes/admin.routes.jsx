import { Routes, Route } from 'react-router-dom';
import { DishesAdmin } from '../pages/DishesAdmin';
import { EditDish } from '../pages/EditDish';
import { HomeAdmin } from '../pages/HomeAdmin';
import { NewDish } from '../pages/NewDish';
import { Favorites } from '../pages/Favorites';
import { OrdersAdmin } from '../pages/OrdersAdmin';

export function AdminRoutes() {
    return(
        <Routes>
            <Route path='/' element={<HomeAdmin />} />
            <Route path='/dishesadmin/:id' element={<DishesAdmin />} />
            <Route path='/editdish/:id' element={<EditDish />} />
            <Route path='/newdish' element={<NewDish />} />
            <Route path='/ordersadmin' element={<OrdersAdmin />} />
            <Route path='/favorites' element={<Favorites />} />
        </Routes>
    )
}