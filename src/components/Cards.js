import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="cards">
      <h1> Escolha o Seu filhote</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/birdimg.jpg"
              text="Saúde e Conforto para seu pássaro"
              label="Bird"
              path="/Bird"
            />
            <CardItem
              src="images/catimg.jpg"
              text="Saúde e Conforto para seu Gato"
              label="Cat"
              path="/Cat"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/dogimg.jpg"
              text="Saúde e Conforto para seu Cachorro"
              label="Dog"
              path="/Dog"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
