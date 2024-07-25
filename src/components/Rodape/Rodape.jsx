import style from './Rodape.module.css';
const Rodape = (props) => {
  //desestruturando
// eslint-disable-next-line react/prop-types
const { nome } = props;

const data = new Date();
let ano = data.getFullYear().toString();
  return (
    <div className={style.Rodape}>
      React basic ~ {ano} dev: {nome}
    </div>
  );
}

export  {Rodape};
