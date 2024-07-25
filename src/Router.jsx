import {Route, Routes} from 'react-router-dom';
import { Inicial} from './pages/Inicial'
import { Sobre } from './pages/Sobre';
import { Error, Padrao } from './Layouts';


const Router = () => {
  return (
    <Routes>
    <Route path='*' element={<Error/>}/>
    <Route  path='/' element={<Padrao/>}>

     <Route path='/' element={<Inicial/>}/>
     <Route path='/sobreNos' element={<Sobre/>}/>

    </Route>
    </Routes>
      
    
  );
}

export  {Router};
