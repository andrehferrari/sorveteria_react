import React from 'react'
import './style.css'
import sabor1 from '../../assets/sabor-oreo.png'
import sabor2 from '../../assets/sabor-pistache.png'
import sabor3 from '../../assets/sabor-cookies-avela.png'
import sabor4 from '../../assets/sorbet-kiwi.png'
import sabor5 from '../../assets/sorbet-morango.png'
import sabor6 from '../../assets/sorbet-limao.png'


function ConteudoSabores() {
  return (
    <main>
        <section className='banner_sabores'>
            <h1>NOSSOS SABORES</h1>
        </section>

        <section className='sessao_principal_sabores'>
            <div className='titulo_sabores'>
                <h2>SABORES DE SORVETE</h2>
            </div>
            <div className='galeria_sabores'>
                <div className='card_sabores'>
                    <img src={sabor1}/>
                    <h3>Sorvete de Oreo</h3>
                    <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor</p>
                </div>
                <div className='card_sabores'>
                    <img src={sabor2}/>
                    <h3>Sorvete Pistache</h3>
                    <p>Cremoso sorvete sabor pistache com pedacinhos de semente</p>
                </div>
                <div className='card_sabores'>
                    <img src={sabor3}/>
                    <h3>Sorvete Cookie e Avelã</h3>
                    <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                </div>
                <div className='card_sabores'>
                    <img src={sabor4}/>
                    <h3>Sorvete de Kiwi</h3>
                    <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                </div>
                <div className='card_sabores'>
                    <img src={sabor5}/>
                    <h3>Sorvete de Morango</h3>
                    <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                </div>
                <div className='card_sabores'>
                    <img src={sabor6}/>
                    <h3>Sorvete de Limão Sicilliano</h3>
                    <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor</p>
                </div>
            </div>
        </section>
    </main>
  );
}

export default ConteudoSabores;