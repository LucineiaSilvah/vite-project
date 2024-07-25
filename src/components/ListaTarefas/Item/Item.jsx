
import { useState } from "react";
import { UseAppContext } from "../../../hooks";
import { Botao, TIPO_BOTAO } from "../../Botao";
import { CampoTexto } from "../../CampoTexto";
import { Loading } from "../../Loading";

const Item = (props) => {
  // eslint-disable-next-line react/prop-types
  const {id, nome } = props;

  const [estaEditando,setEstaEditando] = useState(false);

  const {loadingEditar,loadingDeletar,editarTarefa,removerTarefa} = UseAppContext();
 
const  onBlurTarefa = (e)=>{
  const nomeTarefa = e.currentTarget.value;
  editarTarefa(id, nomeTarefa);
  setEstaEditando(false)
};

const loadingEstaEditando = loadingEditar == id;
const loadingEstaDeletando = loadingDeletar == id;

  return (
    <li>
      { (loadingEstaEditando ||estaEditando )&& (
        <CampoTexto 
        defaultValue={nome}
     
        onBlur={onBlurTarefa} autoFocus/>
      )}
      {!loadingEstaEditando &&  !estaEditando && (
        <pan  onDoubleClick={() => setEstaEditando(true)}>{nome}</pan>
      )}

      {loadingEstaEditando && (
        <Loading/>
      )}
     

      <Botao texto={loadingEstaDeletando ? <Loading/> : '-'} tipo={TIPO_BOTAO.SECUNDARIO}
     
      onClick={() => removerTarefa(id)}
      />
    </li>
  );
}

export {Item};
