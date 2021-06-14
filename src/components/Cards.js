import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
                src='images/PanasonicAvi.jpg'
                text='Explore Panasonic Avionics Live'
                label='Panasonic Avionics'
                path='/panasonic'
            />
            <CardItem 
                src='images/AuraWayOfLifeSpa.jpg'
                text='Explore Aura Way Of Life Live'
                label='Aura Way Of Life Spa'
                path='/portfolio'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem 
                src='images/PickMyAuto1.jpg'
                text='Explore in Portfolio'
                label='Portfolio'
                path='/portfolio'
            />
            <a href="https://dev.nnavidi.com/">
            <CardItem 
                src='images/Org.jpg'
                text='Explore in Portfolio'
                label='Organic Shop' 
            />
            </a>
            <CardItem 
                src='images/IF1.jpg'
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
