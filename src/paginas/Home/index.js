import React from 'react'
import Topo from '../../componentes/Topo/'
import Conteudo from '../../componentes/Conteudo';
import Rodape from '../../componentes/Rodape/'

function Home() {
  return (
    <div>
      <Topo/>
      <Conteudo/>
      <Rodape/>
    </div>
  );
}

export default Home;