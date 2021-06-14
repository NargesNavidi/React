import React from 'react';
import '../../App.css';
import Brief from '../Brief';
import Site from '../Site';
import HeroSec from '../HeroSec';
import Gallery from '../Gallery';

export default function Panasonic() {
    const images = [
        {
            original: 'react2/images/PAC/PAC1.jpg',
            thumbnail: 'react2/images/PAC/PAC1Thumb.png',
        },
        {
            original: 'react2/images/PAC/PAC2.png',
            thumbnail: 'react2/images/PAC/PAC2Thumb.png',
        },
        {
            original: 'react2/images/PAC/PAC4.png',
            thumbnail: 'react2/images/PAC/PAC4Thumb.png',
        },
        {
            original: 'react2/images/PAC/PAC5.png',
            thumbnail: 'react2/images/PAC/PAC5Thumb.png',
        },
        {
            original: 'react2/images/PAC/PAC6.png',
            thumbnail: 'react2/images/PAC/PAC6Thumb.png',
        },
        {
            original: 'react2/images/PAC/PAC8.png',
            thumbnail: 'react2/images/PAC/PAC8Thumb.png',
        },
        {
            original: 'react2/images/PAC/PAC9.png',
            thumbnail: 'react2/images/PAC/PAC9Thumb.png',
        },
        {
            original: 'react2/images/PAC/PAC10.png',
            thumbnail: 'react2/images/PAC/PAC10Thumb.png',
        },
        {
            original: 'react2/images/PAC/PAC11.png',
            thumbnail: 'react2/images/PAC/PAC11Thumb.png',
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

