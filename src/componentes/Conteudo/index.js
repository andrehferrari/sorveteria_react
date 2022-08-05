import React from 'react'
import './style.css'
import sabores from '../../assets/banner-sabores.jpg'
import eventos from '../../assets/eventos-image.jpg'
import sobre from '../../assets/sobre-image.jpg'

function Conteudo() {
  return (
    <main id='home_conteudo'>

      <section className='sessao banner'>
          <h1>SORVETE ARTESANAL</h1>
      </section>

      <section className='sessao sabores'>
        <img src={sabores} />
        <div className='sessao_texto'>
          <h2>NOSSOS SABORES</h2>
          <span>Novos e deliciosos!</span>
          <p>
            Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum convervante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
          </p>
        </div>
      </section>

      <section className='sessao eventos'>
      <div className='sessao_texto'>
          <h2>NOSSOS EVENTOS</h2>
          <span>Delícias com sorvete!</span>
          <p>
            Mais do que uma sorveteria, uma extenção da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvetes da sua vida! Venha nos conhecer e passar um tempo aqui com a gente
          </p>
        </div>
        <img src={eventos}/>
      </section>

      <section className='sessao sobre'>
        <img src={sobre} />
        <div className='sessao_texto'>
        <h2>SOBRE NÓS</h2>
          <span>Alegria em cada casquinha!</span>
          <p>
            Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melgor para o nosso cliente e você não pode ficar dora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.
          </p>
        </div>
      </section>

    </main>
  );
}

export default Conteudo;