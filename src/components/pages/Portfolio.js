import React from 'react';
import CardItem from '../CardItem';
import '../../App.css';



export default function Portfolio() {
    return (
        <div className='cards'>
      <h1 className="portfolio">Portfolio</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
                src='react2/images/PanasonicAvi.jpg'
                text='Explore Panasonic Avionics Live'
                label='Panasonic Avionics'
                path='./panasonic'
            />
            <CardItem 
                src='react2/images/AuraWayOfLifeSpa.jpg'
                text='Explore Aura Way Of Life Live'
                label='Aura Way Of Life Spa'
                path='./AuraWayOfLife'
            />
            <CardItem 
                src='react2/images/Org.jpg'
                text='Explore Aura Way Of Life Live'
                label='Organic Shop'
                path='/OrganicShop'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem 
                src='react2/images/IR.jpg'
                text='Explore in Portfolio'
                label='InstantRecovery'
                path='/InstantRecovery'
            />
            
            <CardItem 
                src='react2/images/ProDogg.jpg'
                text='Explore in Portfolio'
                label='ProDogg'
                path='/ProDogg' 
            />

            <CardItem 
                src='react2/images/IS1.jpg'
                text='Explore in Portfolio'
                label='InstaSlim'
                path='/InstaSlim'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem 
                src='react2/images/IF1.jpg'
                text='Explore in Portfolio'
                label='InstantFigure'
                path='/InstantFigure'
            />

            <CardItem 
                src='react2/images/ISPro.jpg'
                text='Explore in Portfolio'
                label='ISPro'
                path='/ISPro'
            />
            <CardItem 
                src='react2/images/LaMonir.jpg'
                text='Explore in Portfolio'
                label='LaMonir' 
                path='/LaMonir' 
            />
          </ul>
          <ul className='cards__items'>
            <CardItem 
                src='react2/images/IrvineMotors.jpg'
                text='Explore in Portfolio'
                label='Irvine MotorCars'
                path='/IrvineMotorCars'
            />

            <CardItem 
                src='react2/images/PickMyAuto1.jpg'
                text='Explore in Portfolio'
                label='PickMyAuto'
                path='/PickMyAuto'
            />
            <CardItem 
                src='react2/images/DC.png'
                text='Explore in Portfolio'
                label='DealerClick' 
                path='/DealerClick' 
            />
          </ul>
          <ul className='cards__items'>
            <CardItem 
                src='react2/images/TerraMota.png'
                text='Explore in Portfolio'
                label='TerraMota'
                path='/TerraMota'
            />

            <CardItem 
                src='react2/images/DriveOff.jpg'
                text='Explore in Portfolio'
                label='DriveOffAuto'
                path='/DriveOff'
            />
            <CardItem 
                src='react2/images/123CarBuying.png'
                text='Explore in Portfolio'
                label='123CarBuying' 
                path='/123CarBuying' 
            />
          </ul>
        </div>
      </div>
    </div>
        
        
    )
}