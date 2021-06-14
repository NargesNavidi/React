import React from 'react';
import '../../App.css';
import Brief from '../Brief';
import Site from '../Site';
import HeroSec from '../HeroSec';
import Gallery from '../Gallery';

export default function Panasonic() {
    const images = [
        {
            original: 'images/PAC/PAC1.png',
            thumbnail: 'images/PAC/PAC1Thumb.png',
        },
        {
            original: 'images/PAC/PAC2.png',
            thumbnail: 'images/PAC/PAC2Thumb.png',
        },
        {
            original: 'images/PAC/PAC4.png',
            thumbnail: 'images/PAC/PAC4Thumb.png',
        },
        {
            original: 'images/PAC/PAC5.png',
            thumbnail: 'images/PAC/PAC5Thumb.png',
        },
        {
            original: 'images/PAC/PAC6.png',
            thumbnail: 'images/PAC/PAC6Thumb.png',
        },
        {
            original: 'images/PAC/PAC8.png',
            thumbnail: 'images/PAC/PAC8Thumb.png',
        },
        {
            original: 'images/PAC/PAC9.png',
            thumbnail: 'images/PAC/PAC9Thumb.png',
        },
        {
            original: 'images/PAC/PAC10.png',
            thumbnail: 'images/PAC/PAC10Thumb.png',
        },
        {
            original: 'images/PAC/PAC11.png',
            thumbnail: 'images/PAC/PAC11Thumb.png',
        },
    ]
    return(
        <>
            <Gallery images={images} />
            <Brief name='Panasonic Avionics Corpration' 
            skills='HTML5, CSS3, jQuary' 
            projectBrief='This the brief content. This the brief content. This the brief content. This the brief content.' 
            companyInfo='Panasonic Avionics Corporation, the principal North American subsidiary of Panasonic Corporation, designs, engineers, manufactures, sells and installs customized in-flight entertainment and communications solutions to airlines worldwide.' />
        </>
    )
}

