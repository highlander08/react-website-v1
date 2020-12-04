import React from 'react';
import '../../App.css';
import CardItem from '../CardItem'
import { Link } from 'react-router-dom';
import Footer from '../Footer'

export default function Products() {
  return (
    <>
    
    <div className='cards'>
    <h1>Confira Mais Produtos </h1>
    <div className='cards__container'>
    <div className='cards__wrapper'>
    <ul className='cards__items'>
    <CardItem
    src='images/birdimg.jpg'
    text='Saúde e Conforto para seu pássaro'
    path='/products'
    />
    <CardItem
    src='images/birdimg.jpg'
    text='Saúde e Conforto para seu pássaro'
    path='/products'
    /><CardItem
    src='images/birdimg.jpg'
    text='Saúde e Conforto para seu pássaro'
    path='/products'
    /><CardItem
    src='images/birdimg.jpg'
    text='Saúde e Conforto para seu pássaro'
    path='/products'
    /><CardItem
    src='images/birdimg.jpg'
    text='Saúde e Conforto para seu pássaro'
    path='/products'
    /><CardItem
    src='images/birdimg.jpg'
    text='Saúde e Conforto para seu pássaro'
    path='/products'
    /><CardItem
    src='images/birdimg.jpg'
    text='Saúde e Conforto para seu pássaro'
    path='/products'
    /><CardItem
    src='images/birdimg.jpg'
    text='Saúde e Conforto para seu pássaro'
    path='/products'
    /><CardItem
    src='images/birdimg.jpg'
    text='Saúde e Conforto para seu pássaro'
    path='/products'
    />
    </ul>
    <ul className='cards__items'>
    <CardItem
    src='images/birdimg.jpg'
    text='Saúde e Conforto para seu pássaro'
    path='/products'
    />
    <CardItem
    src='images/birdimg.jpg'
    text='Saúde e Conforto para seu pássaro'
    path='/products'
    /><CardItem
    src='images/birdimg.jpg'
    text='Saúde e Conforto para seu pássaro'
    path='/products'
    /><CardItem
    src='images/birdimg.jpg'
    text='Saúde e Conforto para seu pássaro'
    path='/products'
    /><CardItem
    src='images/birdimg.jpg'
    text='Saúde e Conforto para seu pássaro'
    path='/products'
    /><CardItem
    src='images/birdimg.jpg'
    text='Saúde e Conforto para seu pássaro'
    path='/products'
    /><CardItem
    src='images/birdimg.jpg'
    text='Saúde e Conforto para seu pássaro'
    path='/products'
    /><CardItem
    src='images/birdimg.jpg'
    text='Saúde e Conforto para seu pássaro'
    path='/products'
    /><CardItem
    src='images/birdimg.jpg'
    text='Saúde e Conforto para seu pássaro'
    path='/products'
    />
    </ul>
    </div>
    </div>
    </div>
    
    <Footer/>
  
</>
);
//
}
