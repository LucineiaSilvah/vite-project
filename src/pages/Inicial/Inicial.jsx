
import style from './Inicial.module.css';
import { FormCriarTareta, ListaTarefas } from "../../components";

const Inicial = () => {

  return (
    <div className={style.Inicial} >
     <FormCriarTareta/>
     <ListaTarefas />
    </div>
  );
}

export  {Inicial};
