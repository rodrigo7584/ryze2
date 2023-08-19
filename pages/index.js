import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Image from 'next/image'

import {
  MediaCommunitySkin,
  MediaOutlet,
  MediaPlayer,
  MediaPoster
} from '@vidstack/react'

import Accordion from '../components/Accordion'

import 'swiper/css'
import 'swiper/css/navigation'
import 'vidstack/styles/defaults.css'
import 'vidstack/styles/community-skin/video.css'

import logo from '../public/logo.png'
import guySmiling from '../public/guy-smiling.png'
import iconId from '../public/icon-id.png'
import iconPix from '../public/icon-pix.png'
import iconWhats from '../public/icon-whats.png'
import illustrationPinpad from '../public/pinpad.png'
import illustrationWhats from '../public/whatsapp.png'
import illustrationPix from '../public/pix.png'
import illustrationHandShaking from '../public/hand-shaking.png'
import whiteLogo from '../public/logo-white.png'
import iconLikendin from '../public/icon-linkedin.png'
import iconFacebook from '../public/icon-facebook.png'
import iconInstagram from '../public/icon-instagram.png'

export default function Home() {
  return (
    <>
      <header className="menu">
        <div className="container">
          <div className="row">
            <a href="#hero" className="logo">
              <Image src={logo} quality={100} alt="" />
            </a>
          </div>
        </div>
      </header>
      <main>
        <section className="hero" id="hero">
          <div className="container">
            <div className="row">
              <div className="content">
                <h1>
                  Antecipe suas vendas no cartão. Rápido e com as melhores
                  taxas!
                </h1>
                <ul className="checked-list">
                  <li>
                    Antecipe as vendas das principais maquininhas do mercado.
                  </li>
                  <li>Concentre sua agenda de antecipação.</li>
                  <li>As melhores taxas do mercado.</li>
                  <li>Sem burocracia e sem cobrança de IOF.</li>
                  <li>
                    Receba em até 30 minutos, a velocidade que o seu negócio
                    precisa.
                  </li>
                </ul>
                <a href="#" className="btn-green">
                  Quero participar
                </a>
              </div>
              <div className="section-image">
                <Image
                  src={guySmiling}
                  width={580}
                  height={640}
                  quality={100}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section className="antecipe" id="antecipe">
          <div className="container">
            <div className="row">
              <h2>Antecipe em poucos passos</h2>
              <p className="subtitle">
                Esperar 30 dias ou mais para receber suas vendas compromete seu
                capital de giro. Com a Ryze, você antecipa suas vendas de forma
                <strong> rápida</strong>,<strong> fácil</strong> e
                <strong> transparente!</strong>
              </p>
              <div className="boxes">
                <div className="box">
                  <Image
                    src={iconId}
                    width={170}
                    height={170}
                    quality={100}
                    alt=""
                    className="icone"
                  />
                  <p>
                    Faça seu cadastro e autorize a consulta a sua agenda de
                    recebíveis.
                  </p>
                </div>
                <div className="box">
                  <Image
                    src={iconWhats}
                    width={170}
                    height={170}
                    quality={100}
                    alt=""
                    className="icone"
                  />
                  <p>Receba propostas de antecipação via WhatsApp.</p>
                </div>
                <div className="box">
                  <Image
                    src={iconPix}
                    width={170}
                    height={170}
                    quality={100}
                    alt=""
                    className="icone"
                  />
                  <p>Aceite as propostas e receba via Pix em até 30 minutos.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="destaques" id="destaques">
          <div className="container">
            <div className="row">
              <div className="content">
                <h2>Antecipe de qualquer maquininha de cartão</h2>
                <p>
                  PagSeguro, Cielo, Rede, Stone, qualquer que seja a sua
                  maquininha, nós podemos fazer a antecipação.
                </p>
              </div>
              <div className="section-image">
                <Image
                  src={illustrationPinpad}
                  width={339}
                  height={310}
                  quality={100}
                  alt=""
                  className="illustrationPinpad"
                />
              </div>
            </div>
            <div className="row">
              <div className="section-image">
                <Image
                  src={illustrationWhats}
                  width={325}
                  height={335}
                  quality={100}
                  alt=""
                  className="illustrationWhats"
                />
              </div>
              <div className="content">
                <h2>Processo fácil via WhatsApp</h2>
                <p>
                  Você não tem que baixar nenhum aplicativo nem fazer algum
                  login. Todo o processo de cadastro e solicitação é feito via
                  WhatsApp. O máximo de praticidade possível!
                </p>
              </div>
            </div>
            <div className="row">
              <div className="content">
                <h2>Receba via Pix no mesmo dia</h2>
                <p>
                  Se você não vai esperar para receber por suas vendas, não tem
                  que esperar para receber pela Ryze. Assim que fizer a
                  solicitação, mandamos um Pix no mesmo dia com o valor.
                </p>
              </div>
              <div className="section-image">
                <Image
                  src={illustrationPix}
                  width={336}
                  height={292}
                  quality={100}
                  alt=""
                  className="illustrationPix"
                />
              </div>
            </div>
            <div className="row">
              <div className="section-image">
                <Image
                  src={illustrationHandShaking}
                  width={360}
                  height={334}
                  quality={100}
                  alt=""
                  className="illustrationHandShaking"
                />
              </div>
              <div className="content">
                <h2>Taxa de serviço baixa e contrato transparente</h2>
                <p>
                  Aqui na Ryze, a prioridade é a transparência do serviço. Por
                  isso, nossos contratos sempre têm taxas boas para os pequenos
                  empreendedores e nada de letra miúda!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="video-sobre" id="video-sobre">
          <div className="container">
            <div className="row">
              <h2>
                Assista o vídeo e veja como é <span>fácil e rápido</span> pagar
                com a Ryze.
              </h2>
              <MediaPlayer
                src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
                poster="/poster-video.png"
                thumbnails="/poster-video.png"
                aspectRatio={16 / 9}
              >
                <MediaOutlet />
                <MediaPoster alt="A video showing how it work" />
                <MediaCommunitySkin />
              </MediaPlayer>
            </div>
          </div>
        </section>
        <section className="faq" id="faq">
          <div className="container">
            <div className="row">
              <h2>Perguntas Frequentes</h2>
              <Accordion
                title="O que é antecipação de cartões?"
                content="Antecipação de cartão é um modo de receber imediatamente o 
                 valor de vendas de cartões realizadas na modalidade crédito e parcelado.
                 Com o nosso serviço, você pode adiantar os próprios recebíveis, que 
                 seriam pagos somente no futuro, sem criar novas dívidas e sem precisar 
                 de empréstimos."
              />
              <Accordion
                title="Como solicitar a antecipação de cartões?"
                content="Você pode fazer a antecipação de cartão em poucos minutos e de 
                 forma 100% online através WhatsApp da Ryze."
              />
              <Accordion
                title="Quem pode solicitar a antecipação de cartões?"
                content="Qualquer empresa que venda de forma recorrente usando cartão de 
                 crédito. No entanto, não é possível realizar a antecipação quando a empresa
                 já faz a antecipação automática pela maquininha."
              />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="row">
            <div className="about">
              <a href="#hero" className="logo">
                <Image
                  src={whiteLogo}
                  width={120}
                  height={50}
                  quality={100}
                  alt=""
                />
              </a>
              <p>TERMOS DE USO, OPT-IN E POLÍTICA DE PRIVACIDADE</p>
              <p>Nome da Empresa Ltda</p>
              <p>CNPJ: 00.000.000/0000-00</p>
              <p>Rua Nome da Rua, Número - Bairro, Cidade - UF, 00000-000</p>
              <a href="mailto:emaildaempresa@gmail.com" className="email">
                emaildaempresa@gmail.com
              </a>
            </div>
            <div className="social">
              <ul className="social-list">
                <li>
                  <a href="#">
                    <Image
                      src={iconLikendin}
                      width={31}
                      height={31}
                      quality={100}
                      alt=""
                    />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <Image
                      src={iconFacebook}
                      width={31}
                      height={31}
                      quality={100}
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src={iconInstagram}
                      width={31}
                      height={31}
                      quality={100}
                      alt=""
                    />
                  </a>
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem
                ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
