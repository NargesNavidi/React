import React from 'react';
import '../../App.css';
import Brief from '../Brief';
import Gallery from '../Gallery';

export default function DriveOff() {
    const images = [
        {
            original: 'images/DriveOff/DriveOff01.jpg',
            thumbnail: 'images/DriveOff/DriveOff01Thumb.jpg',
        },
        {
            original: 'images/DriveOff/DriveOff1.png',
            thumbnail: 'images/DriveOff/DriveOff1Thumb.png',
        },
        {
            original: 'images/DriveOff/DriveOff2.png',
            thumbnail: 'images/DriveOff/DriveOff2Thumb.png',
        },
        {
            original: 'images/DriveOff/DriveOff3.png',
            thumbnail: 'images/DriveOff/DriveOff3Thumb.png',
        },
        {
            original: 'images/DriveOff/DriveOff4.png',
            thumbnail: 'images/DriveOff/DriveOff4Thumb.png',
        },
        {
            original: 'images/DriveOff/DriveOff5.png',
            thumbnail: 'images/DriveOff/DriveOff5Thumb.png',
        },
        {
            original: 'images/DriveOff/DriveOff6.png',
            thumbnail: 'images/DriveOff/DriveOff6Thumb.png',
        },
        {
            original: 'images/DriveOff/DriveOff7.png',
            thumbnail: 'images/DriveOff/DriveOff7Thumb.png',
        },
        {
            original: 'images/DriveOff/DriveOff8.png',
            thumbnail: 'images/DriveOff/DriveOff8Thumb.png',
        },
        {
            original: 'images/DriveOff/DriveOff9.png',
            thumbnail: 'images/DriveOff/DriveOff9Thumb.png',
        },
        {
            original: 'images/DriveOff/DriveOff10.png',
            thumbnail: 'images/DriveOff/DriveOff10Thumb.png',
        },
        {
            original: 'images/DriveOff/DriveOff11.png',
            thumbnail: 'images/DriveOff/DriveOff11Thumb.png',
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