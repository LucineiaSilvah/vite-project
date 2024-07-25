import { useState } from "react";
import { Botao } from "../Botao";
import style from "./FormCriarTarefa.module.css";
import { CampoTexto } from "../CampoTexto";
import { UseAppContext } from "../../hooks";
import { Loading } from "../Loading";

const FormCriarTareta = () => {
  //novo estado
  const [nomeTarefa, setNomeTarefa] = useState('');
  const {adicionarTarefa, loadingCriar} = UseAppContext()

  const onChangeNomeTarefa = (e) => {
    setNomeTarefa(e.currentTarget.value);
  };
  const submeterFormulario = (e) => {
    e.preventDefault();

    if(!nomeTarefa) {
      return;
    }

    adicionarTarefa(nomeTarefa)
    setNomeTarefa("");
  };
  return (
    <form className={style.FormCriarTarefa} onSubmit={submeterFormulario}>
      <CampoTexto value={nomeTarefa} onChange={onChangeNomeTarefa} />
     
      <Botao texto={loadingCriar ? <Loading/> : "+" }/>
    </form>
  );
};

export { FormCriarTareta };
