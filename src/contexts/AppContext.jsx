/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { api } from "../services";


export const AppContext = createContext({});

export const AppContextProvider = (props)=>{
const {children} = props;
const [criador,setCriador] = useState('luh')
const [tarefas,setTarefas] = useState([]);

const [loadingCarregar,setLoadingCarregar]= useState(false);
const [loadingCriar,setLoadingCriar]= useState(false);
const [loadingEditar,setLoadingEditar]= useState(null);
const [loadingDeletar,setLoadingDeletar]= useState(null);


const carregarTarefas = async () => {
  setLoadingCarregar(true);
  try {
    const { data = [] } = await api.get('http://localhost:3333/tarefas');
    setTarefas([...data]);
  } catch (error) {
    console.error('Erro ao carregar tarefas:', error);
    // Você pode adicionar um tratamento de erro mais sofisticado aqui, como exibir uma mensagem para o usuário
  } finally {
    setLoadingCarregar(false);
  }
};
const adicionarTarefa = async (nomeTarefa)=>{
  setLoadingCriar(true);
  try{

    const {data: tarefa} = await api.post('http://localhost:3333/tarefas', {
      nome:nomeTarefa,
    })
    setTarefas((estadoAtual) => {
  
      return [...estadoAtual, tarefa];
    });


  }catch (error){
    console.error('Erro ao carregar tarefas:', error);
  }
  finally{
    setLoadingCriar(false)

  }
}

const removerTarefa = async (idTarefa) => {
  setLoadingDeletar(idTarefa)
 await api.delete(`http://localhost:3333/tarefas/${idTarefa}`)
  setTarefas(estadoAtual => {
const tarefasAtualizadas = estadoAtual.filter(tarefa => tarefa.id != idTarefa );

return [
  ...tarefasAtualizadas,
];
  });
  setLoadingDeletar(null)
};
const editarTarefa = async (idTarefa,nomeTarefa) => {
  setLoadingEditar(idTarefa)
const {data: tarefaAtual} = await api.put(`http://localhost:3333/tarefas/${idTarefa}`,{
  nome: nomeTarefa,
})
  setTarefas(estadoAtual => {
const tarefasAtualizadas = estadoAtual.map(tarefa => {
  return tarefa.id == idTarefa ? {
    ...tarefa,
    nome:tarefaAtual.nome,
  }: tarefa;

});

return [
  ...tarefasAtualizadas,
];
  });

  setLoadingEditar(null)
};

useEffect(()=>{
  carregarTarefas();
},[]);
return(
  <AppContext.Provider value={{
    criador,
    tarefas,
    adicionarTarefa,
    removerTarefa,
    editarTarefa,
    loadingCarregar,
    loadingCriar,
    loadingEditar,
    loadingDeletar
  }}>
  {children}
  </AppContext.Provider>
)


}