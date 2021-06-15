import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some of my works!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
                src='react2/images/PanasonicAvi.jpg'
                text='Explore Panasonic Avionics Live'
                label='Panasonic Avionics'
                path='/Panasonic'
            />
            <CardItem 
                src='react2/images/AuraWayOfLifeSpa.jpg'
                text='Explore Aura Way Of Life Live'
                label='Aura Way Of Life Spa'
                path='/AuraWayOfLife'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem 
                src='react2/images/PickMyAuto1.jpg'
                text='Explore in PickMyAuto'
                label='PickMyAuto'
                path='/PickMyAuto'
            />
            <a href="https://dev.nnavidi.com/">
            <CardItem 
                src='react2/images/Org.jpg'
                text='Explore in Organic Shop'
                label='Organic Shop' 
                path='/OrganicShop'
            />
            </a>
            <CardItem 
                src='react2/images/IF1.jpg'
                text='Explore in InstantFigure'
                label='InstantFigure'
                path='/InstantFigure'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
