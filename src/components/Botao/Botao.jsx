import style from './Botao.module.css';
import {TIPO_BOTAO} from './constants';
const Botao = (props) => {
  const {texto ,tipo = TIPO_BOTAO.PRIMARIO, ...outrasprops }= props;
  return (
 
    <button tipo={tipo} {...outrasprops} className={style.Botao} >
      {texto}
    
    </button>
  );
}

export {Botao};
