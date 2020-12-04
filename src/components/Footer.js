import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo1 from "../components/logo1.jpg"


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Venha nos visitar, Melhor preço da região ✔
        </p>
        <p className='footer-subscription-text'>
          Raçoes e Acessorios <br></br> Para Seu  Filhote
        </p>
        
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Sobre Nós</h2>
            
            <p>Vendemos Raçoes e acessorios de qualidade
              temos o objetivo de levar o conforto e 
              saude para o seu filhote amado !
            </p>
          </div>
          <div className='footer-link-items'>
            <h2>Endereço</h2>
            <p>Fortaleza - CE<br/> Planalto Ayrton Senna Rua palmeiras 1070</p>
            
          </div>
          <div className='footer-link-items'>
            <h2>Contato</h2>
            <p> (85) 992315342 ✔ santosray62@gmaiil.com</p>
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
         
          <div className='footer-link-items'>
            <h2>Rede Social</h2>
            <a href='https://www.instagram.com/'>Instagram</a>
            <a href='https://www.facebook.com/'>Facebook</a>
          
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <span>Loja 1</span>

              <img src={logo1} alt="Logo"></img>
            </Link>
          </div>
          <small className='website-rights'>Loja 1 © 2020</small>
          <div className='social-icons'>
            <a href="https://www.facebook.com/"
              className='social-icon-link facebook'
              to='/'
              // target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </a>
            <a href="https://www.instagram.com/"
              className='social-icon-link instagram'
              to='/'
              // target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
