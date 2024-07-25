import style from './CampoTexto.module.css'
// eslint-disable-next-line no-unused-vars
const CampoTexto = (props) => {
  return (
    <input type='text' 
    {...props} className={style.CampoTexto}
     />
  );
}

export {CampoTexto};
