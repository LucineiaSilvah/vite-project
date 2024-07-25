import { Link } from 'react-router-dom';
import style from './Cabecalho.module.css';

const Cabecalho = () => {
  return (
    <div className={style.Cabecalho}>
      <Link to='/'>
      
     <h1>

    <span>Todo</span>
    List
     </h1>
      
      </Link>
      <Link to='/sobreNos'>Sobre nos</Link>

    </div>
  )
}

export { Cabecalho };
