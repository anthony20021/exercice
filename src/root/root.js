import {createBrowserRouter} from 'react-router-dom'
import PokeList from './compoment/Pokelist';
import Home from './compoment/Home';
import PokeDetail from './compoment/PokemonDetail';
const router = createBrowserRouter([{path:'/pokemon', element:<PokeList></PokeList>},{path:'', element:<Home></Home>},{path:'/pokemon/:id/:type/:desc', element:<PokeDetail></PokeDetail>}])
export default router;