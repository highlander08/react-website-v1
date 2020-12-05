import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';
// import CardItem from './CardItem'
function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-3.mp4" autoPlay loop muted />
      <h1>O MELHOR PET SHOP</h1>
      <p>Qual o seu filhote ?</p>
      <div className="hero-btns">
      {/* <CardItem
              src="images/birdimg.jpg"
              text="Saúde e Conforto para seu pássaro"
              label="Bird"
              path="/Bird"
            /> */}
        <Link className="Cat"
          to="/Cat"
          // buttonStyle="btn--outline"
          // buttonSize="btn--large"
        >
          Gato
        </Link>

        <Link
          to="/Dog"
          className="Dog"
          // buttonStyle="btn--outline"
          // buttonSize="btn--large"
        >
          Cachorro
        </Link>

        <Link
          to="/Bird"
          className="Bird"
          // buttonStyle="btn--outline"
          // buttonSize="btn--large"
        >
          Passaro
        </Link>
        <Link
          to="/products"
          className="btns"
          // buttonStyle="btn--primary"
          // buttonSize="btn--large"
          onClick={console.log('hey')}
        >
          Melhor Preço da Região <i className="far fa-play-circle" />
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
