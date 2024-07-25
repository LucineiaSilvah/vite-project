

import {Cabecalho ,Conteudo ,Rodape} from '../../components';

import { Outlet } from 'react-router-dom';

import { UseAppContext } from '../../hooks';

const Padrao = () => {
 // eslint-disable-next-line no-unused-vars
 const { criador } = UseAppContext();
  return (
    <>
        <Cabecalho nomeUsuario={"luh"}/>
      <Conteudo>
      <Outlet/>
      
      </Conteudo>
      <Rodape nome={criador}/> 
    </>
  );
}

export {Padrao};
