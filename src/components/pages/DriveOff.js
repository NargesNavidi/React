import React from 'react';
import '../../App.css';
import Brief from '../Brief';
import Gallery from '../Gallery';

export default function DriveOff() {
    const images = [
        {
            original: 'react2/images/DriveOff/DriveOff01.jpg',
            thumbnail: 'react2/images/DriveOff/DriveOff01Thumb.jpg',
        },
        {
            original: 'react2/images/DriveOff/DriveOff1.png',
            thumbnail: 'react2/images/DriveOff/DriveOff1Thumb.png',
        },
        {
            original: 'react2/images/DriveOff/DriveOff2.png',
            thumbnail: 'react2/images/DriveOff/DriveOff2Thumb.png',
        },
        {
            original: 'react2/images/DriveOff/DriveOff3.png',
            thumbnail: 'react2/images/DriveOff/DriveOff3Thumb.png',
        },
        {
            original: 'react2/images/DriveOff/DriveOff4.png',
            thumbnail: 'react2/images/DriveOff/DriveOff4Thumb.png',
        },
        {
            original: 'react2/images/DriveOff/DriveOff5.png',
            thumbnail: 'react2/images/DriveOff/DriveOff5Thumb.png',
        },
        {
            original: 'react2/images/DriveOff/DriveOff6.png',
            thumbnail: 'react2/images/DriveOff/DriveOff6Thumb.png',
        },
        {
            original: 'react2/images/DriveOff/DriveOff7.png',
            thumbnail: 'react2/images/DriveOff/DriveOff7Thumb.png',
        },
        {
            original: 'react2/images/DriveOff/DriveOff8.png',
            thumbnail: 'react2/images/DriveOff/DriveOff8Thumb.png',
        },
        {
            original: 'react2/images/DriveOff/DriveOff9.png',
            thumbnail: 'react2/images/DriveOff/DriveOff9Thumb.png',
        },
        {
            original: 'react2/images/DriveOff/DriveOff10.png',
            thumbnail: 'react2/images/DriveOff/DriveOff10Thumb.png',
        },
        {
            original: 'react2/images/DriveOff/DriveOff11.png',
            thumbnail: 'react2/images/DriveOff/DriveOff11Thumb.png',
        }
    ]
    return(
        <>
            <Gallery images={images} />
            <Brief name='DriveOff' 
            skills='HTML5, CSS3, WordPress' 
            projectBrief='Created his web design and prior developed her site' 
            companyInfo='Kevin Mitchel' />
        </>
    )
}