import React from 'react'
import logo from '../../assets/logo.png'
import './style.css'

function Topo() {
  return (
        <header id='home_topo'>
            <div className='limitar_sessao_topo'>
                <a href='/'>
                <img className='logo' src={logo} />
                </a>
                <nav className='navegacao_topo'>
                    <a className='links' href='/'>Home</a>
                    <a className='links' href='Sabores'>Sabores</a>
                    <a className='links'  href='Sobre'>Sobre</a>
                </nav>
            </div>
        </header>
  );
}

export default Topo;