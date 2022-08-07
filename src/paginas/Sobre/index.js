import './style.css';
import Rodape from '../../componentes/Rodape'
import Topo from '../../componentes/Topo/'
import Conteudo from '../../componentes/Conteudo-sobre/'

function Sobre() {
  return (
    <main>
      <Topo />
      <Conteudo />
      <Rodape />
    </main>
  );
}

export default Sobre;