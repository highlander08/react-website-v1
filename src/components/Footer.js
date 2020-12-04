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
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Sobre Nós</h2>
            
            <p>Vendemos Raçoes e acessorios de qualidade
              temos o objetivo de levar o conforto e 
              saude para o seu filhote amado !
            </p>
          </div>
          <div class='footer-link-items'>
            <h2>Endereço</h2>
            <p>Fortaleza - CE<br/> Planalto Ayrton Senna Rua palmeiras 1070</p>
            
          </div>
          <div class='footer-link-items'>
            <h2>Contato</h2>
            <p> (85) 992315342 ✔ santosray62@gmaiil.com</p>
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
         
          <div class='footer-link-items'>
            <h2>Rede Social</h2>
            <a href='https://www.instagram.com/'>Instagram</a>
            <a href='https://www.facebook.com/'>Facebook</a>
          
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <span>Loja 1</span>

              <img src={logo1} alt="Logo"></img>
            </Link>
          </div>
          <small class='website-rights'>Loja 1 © 2020</small>
          <div class='social-icons'>
            <a href="https://www.facebook.com/"
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a href="https://www.instagram.com/"
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
