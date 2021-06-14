import React from 'react';
import '../../App.css';
import Brief from '../Brief';
import Gallery from '../Gallery';

export default function InstantRecovery() {
    const images = [
        {
            original: 'images/InstantRecovery/IR1.jpg',
            thumbnail: 'images/InstantRecovery/IR1Thumb.jpg',
        },
        {
            original: 'images/InstantRecovery/IR2.png',
            thumbnail: 'images/InstantRecovery/IR2Thumb.png',
        },
        {
            original: 'images/InstantRecovery/IR3.png',
            thumbnail: 'images/InstantRecovery/IR3Thumb.png',
        },
        {
            original: 'images/InstantRecovery/IR4.png',
            thumbnail: 'images/InstantRecovery/IR4Thumb.png',
        },
        {
            original: 'images/InstantRecovery/IR5.png',
            thumbnail: 'images/InstantRecovery/IR5Thumb.png',
        },
        {
            original: 'images/InstantRecovery/IR6.png',
            thumbnail: 'images/InstantRecovery/IR6Thumb.png',
        },
        {
            original: 'images/InstantRecovery/IR8.png',
            thumbnail: 'images/InstantRecovery/IR8Thumb.png',
        },
        {
            original: 'images/InstantRecovery/IR9.png',
            thumbnail: 'images/InstantRecovery/IR9Thumb.png',
        },
        {
            original: 'images/InstantRecovery/IR10.png',
            thumbnail: 'images/InstantRecovery/IR10Thumb.png',
        },
        {
            original: 'images/InstantRecovery/IR11.png',
            thumbnail: 'images/InstantRecovery/IR11Thumb.png',
        },
        {
            original: 'images/InstantRecovery/IR12.png',
            thumbnail: 'images/InstantRecovery/IR12Thumb.png',
        },
        {
            original: 'images/InstantRecovery/IR13.png',
            thumbnail: 'images/InstantRecovery/IR13Thumb.png',
        },
        {
            original: 'images/InstantRecovery/IR14.png',
            thumbnail: 'images/InstantRecovery/IR14Thumb.png',
        },
    ]
    return(
        <>
            <Gallery images={images} />
            <Brief name='InstantRecoveryMD' 
            skills='HTML5, CSS3, OpenCart' 
            projectBrief='Created her web design and prior developed her site' 
            companyInfo='Monir Jalili' />
        </>
    )
}