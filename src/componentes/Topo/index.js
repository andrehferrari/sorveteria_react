import React from 'react'
import logo from '../../assets/logo.png'
import './style.css'

function Topo() {
  return (
    <div>
        <header id='home_topo'>
            <div className='limitar_sessao'>
                <img className='logo' src={logo} />
                <nav className='navegacao_topo'>
                    <a className='links' href='/'>Home</a>
                    <a className='links' href='Sabores'>Sabores</a>
                    <a className='links'  href='Sobre'>Sobre</a>
                </nav>
            </div>
        </header>
    </div>
  );
}

export default Topo;