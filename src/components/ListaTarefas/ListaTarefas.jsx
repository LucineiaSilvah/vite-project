

import { UseAppContext } from "../../hooks";
import { Loading } from "../Loading";
import { Item } from "./Item";
import style from "./ListaTarefas.module.css";

const ListaTarefas = () => {

  const { tarefas, loadingCarregar} = UseAppContext();

  return (
    <ul className={style.ListaTarefas}>
      {
        loadingCarregar && 
         ( <p>carregando... 
          <Loading/>
          </p>

         )}

      {!loadingCarregar && !tarefas.length && (
          <p>Nao ha tarefas cadastradas</p>
      )}

      {tarefas.map((tarefa, index) => (
        <Item 
        key={index} id={tarefa.id} nome={tarefa.nome}
       
        />
      ))}
    </ul>
  );
};

export { ListaTarefas };
