import React from 'react'
import './style.css'

function Rodape() {
  return (
    <footer id='home_rodape'>

      <div>
        <img/>
        <div>
          <h2>ENDEREÇO</h2>
          <p>Av. Bernardino de Campos, 98</p>
          <p>São Paulo, SP 12345-678</p>
        </div>
        <div>
          <h2>CONTATO</h2>
          <p>info@meusite.com</p>
          <p>Tel: (11) 3456-7890</p>
        </div>
        <div>
          <h2>HORÁRIOS</h2>
          <p>ABERTO TODOS OS DIAS</p>
          <p>10:00 - 18:00</p>
        </div>
      </div>

      <div>
        <p>Gelateria. Orgulhosamente desenvolvido por 'André Ferrari'</p>
      </div>

    </footer>
  );
}

export default Rodape;