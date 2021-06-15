import React, { useState } from 'react';
import '../App.css';
import './HeroSec.css';
import { Button } from './Button';

function HeroSec() {
  // window.onload = function() {
  //   setTimeout(myFunc, 3000);
  //   }
  // const x = this.x;
  // const myFunc = (x) => {  
  //   setTimeout(x, 3000)
  // };
  // const [headers, setHeaders] = useState(false);

  // const appearText =() =>{
  //   setHeaders(true);
  // }

  // window.onload = () => {
  //   setTimeout(appearText, 6500)
  // }

    return (
      <div className='hero-container'>
        <video src='/videos/video-3.mp4' autoPlay loop muted />
        <section className='headers'>
          <h1>Front-End Developer</h1>
          <p>What are you waiting for?</p>
          <div className='hero-btns'>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                path='/Portfolio'
                buttonSize='btn--large'>
                Check My Works
            </Button>
            <Button
                className='btns'
                buttonStyle='btn--primary'
                path='/Bio#contact'
                buttonSize='btn--large'>
                Contact Me
            </Button>
          </div>
        </section>
        
      </div>
      
    );
}

export default HeroSec;
