import React from 'react';
import { Button } from './Button';

function HeroSecContent() {
    return (
        <>
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
        </>
    )
}

export default HeroSecContent;
