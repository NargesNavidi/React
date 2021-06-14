import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some of Narges's works!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
                src='react2/images/PanasonicAvi.jpg'
                text='Explore Panasonic Avionics Live'
                label='Panasonic Avionics'
                path='/panasonic'
            />
            <CardItem 
                src='react2/images/AuraWayOfLifeSpa.jpg'
                text='Explore Aura Way Of Life Live'
                label='Aura Way Of Life Spa'
                path='/portfolio'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem 
                src='react2/images/PickMyAuto1.jpg'
                text='Explore in Portfolio'
                label='Portfolio'
                path='/portfolio'
            />
            <a href="https://dev.nnavidi.com/">
            <CardItem 
                src='react2/images/Org.jpg'
                text='Explore in Portfolio'
                label='Organic Shop' 
            />
            </a>
            <CardItem 
                src='react2/images/IF1.jpg'
                text='Explore in Portfolio'
                label='Portfolio'
                path='/portfolio'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
