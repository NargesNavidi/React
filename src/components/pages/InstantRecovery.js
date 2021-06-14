import React from 'react';
import '../../App.css';
import Brief from '../Brief';
import Gallery from '../Gallery';

export default function InstantRecovery() {
    const images = [
        {
            original: 'react2/images/InstantRecovery/IR1.jpg',
            thumbnail: 'react2/images/InstantRecovery/IR1Thumb.jpg',
        },
        {
            original: 'react2/images/InstantRecovery/IR2.png',
            thumbnail: 'react2/images/InstantRecovery/IR2Thumb.png',
        },
        {
            original: 'react2/images/InstantRecovery/IR3.png',
            thumbnail: 'react2/images/InstantRecovery/IR3Thumb.png',
        },
        {
            original: 'react2/images/InstantRecovery/IR4.png',
            thumbnail: 'react2/images/InstantRecovery/IR4Thumb.png',
        },
        {
            original: 'react2/images/InstantRecovery/IR5.png',
            thumbnail: 'react2/images/InstantRecovery/IR5Thumb.png',
        },
        {
            original: 'react2/images/InstantRecovery/IR6.png',
            thumbnail: 'react2/images/InstantRecovery/IR6Thumb.png',
        },
        {
            original: 'react2/images/InstantRecovery/IR8.png',
            thumbnail: 'react2/images/InstantRecovery/IR8Thumb.png',
        },
        {
            original: 'react2/images/InstantRecovery/IR9.png',
            thumbnail: 'react2/images/InstantRecovery/IR9Thumb.png',
        },
        {
            original: 'react2/images/InstantRecovery/IR10.png',
            thumbnail: 'react2/images/InstantRecovery/IR10Thumb.png',
        },
        {
            original: 'react2/images/InstantRecovery/IR11.png',
            thumbnail: 'react2/images/InstantRecovery/IR11Thumb.png',
        },
        {
            original: 'react2/images/InstantRecovery/IR12.png',
            thumbnail: 'react2/images/InstantRecovery/IR12Thumb.png',
        },
        {
            original: 'react2/images/InstantRecovery/IR13.png',
            thumbnail: 'react2/images/InstantRecovery/IR13Thumb.png',
        },
        {
            original: 'react2/images/InstantRecovery/IR14.png',
            thumbnail: 'react2/images/InstantRecovery/IR14Thumb.png',
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