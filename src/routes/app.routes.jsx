import { Routes, Route } from 'react-router-dom';
import { Dishes } from '../pages/Dishes';
import { DishesAdmin } from '../pages/DishesAdmin';
import { EditDish } from '../pages/EditDish';
import { Home } from '../pages/Home';
import { Menu } from '../pages/Menu';
import { MenuAdmin } from '../pages/MenuAdmin';
import { NewDish } from '../pages/NewDish';

export function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dishes' element={<Dishes />} />
            <Route path='/dishesadmin' element={<DishesAdmin />} />
            <Route path='/editdish' element={<EditDish />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/menuadmin' element={<MenuAdmin />} />
            <Route path='/newdish' element={<NewDish />} />
        </Routes>
    )
}