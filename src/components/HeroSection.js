import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>O MELHOR PET SHOP</h1>
      <p>Qual o seu filhote ?</p>
      <div className='hero-btns'>
        <a href="/Cat"
          className='Cat'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Gato
        </a>

        <a  href="/Dog"
          className='Dog'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Cachorro
        </a>

        <a href="Bird"
          className='Bird'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Passaro
        </a>
        <a href="products"
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Melhor Preço da Região <i className='far fa-play-circle' />
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
