import React from 'react'
import './style.css'
import logo from '../../assets/logo.png'

function Rodape() {
  return (
    <footer id='home_rodape'>

      <div className='limitar_sessao'>
        <img src={logo}/>
        <div className='elemento_rodape'>
          <h2>ENDEREÇO</h2>
          <p>Av. Bernardino de Campos, 98</p>
          <p>São Paulo, SP 12345-678</p>
        </div>
        <div className='elemento_rodape'>
          <h2>CONTATO</h2>
          <p>info@meusite.com</p>
          <p>Tel: (11) 3456-7890</p>
        </div>
        <div className='elemento_rodape'>
          <h2>HORÁRIOS</h2>
          <p>ABERTO TODOS OS DIAS</p>
          <p>10:00 - 18:00</p>
        </div>
      </div>

      <div className='elemento_rodape_final'>
        <p>Gelateria. Orgulhosamente desenvolvido por 'André Ferrari'</p>
      </div>

    </footer>
  );
}

export default Rodape;