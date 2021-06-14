import React, { useState } from 'react';
import '../App.css';
import './HeroSec.css';
import { Button } from './Button';
import HeroSecContent from './HeroSecContent';

function HeroSec() {
  // window.onload = function() {
  //   setTimeout(myFunc, 3000);
  //   }
  // const x = this.x;
  // const myFunc = (x) => {  
  //   setTimeout(x, 3000)
  // };
  const [headers, setHeaders] = useState(false);

  const appearText =() =>{
    setHeaders(true);
  }

  window.onload = () => {
    setTimeout(appearText, 6500)
  }

    return (
      <div className='hero-container'>
        <video src='/videos/video-3.mp4' autoPlay loop muted />
        <section className={headers ? 'headers' : 'headers hidden'}>
          <h1>Front-End Developer</h1>
          <p>What are you waiting for?</p>
          <div className='hero-btns'>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                Check My Work
            </Button>
            <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'>
                Contact Me
            </Button>
          </div>
        </section>
        
      </div>
      
    );
}

export default HeroSec;
