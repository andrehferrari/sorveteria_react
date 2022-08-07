import React from 'react'
import './style.css'
import img1 from '../../assets/eventos-image.jpg'
import img2 from '../../assets/sorveteria.jpg'

function ConteudoSobre() {
  return (
    <main>
        <section className='banner_sobre'>
          <h1>A GELATERIA</h1>
        </section>

        <section className='sessao_texto_sobre'>
          <div className='bloco_texto_sobre'>
            <h2>Sobre Nós</h2>
            <p>Nós simplesmente amamos sorvete!</p>
          </div>
          <div>
            Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.<br/><br/>
            Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
          </div>
        </section>

        <section className='galeria_imagem_sobre'>
          <div className='galeria_interna'>
            <img src={img1}/>
            <img src={img2}/>
          </div>
        </section>
    </main>
  );
}

export default ConteudoSobre;