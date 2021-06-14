import React from 'react';
import '../../App.css';
import Brief from '../Brief';
import Gallery from '../Gallery';

export default function DealerClick() {
    const images = [
        {
            original: 'react2/images/DealerClick/DC1.png',
            thumbnail: 'react2/images/DealerClick/DC1Thumb.png',
        },
        {
            original: 'react2/images/DealerClick/DC2.png',
            thumbnail: 'react2/images/DealerClick/DC2Thumb.png',
        },
        {
            original: 'react2/images/DealerClick/DC3.png',
            thumbnail: 'react2/images/DealerClick/DC3Thumb.png',
        },
        {
            original: 'react2/images/DealerClick/DC4.png',
            thumbnail: 'react2/images/DealerClick/DC4Thumb.png',
        },
        {
            original: 'react2/images/DealerClick/DC5.png',
            thumbnail: 'react2/images/DealerClick/DC5Thumb.png',
        },
        {
            original: 'react2/images/DealerClick/DC6.png',
            thumbnail: 'react2/images/DealerClick/DC6Thumb.png',
        },
        {
            original: 'react2/images/DealerClick/DC7.png',
            thumbnail: 'react2/images/DealerClick/DC7Thumb.png',
        },
        {
            original: 'react2/images/DealerClick/DC8.png',
            thumbnail: 'react2/images/DealerClick/DC8Thumb.png',
        },
        {
            original: 'react2/images/DealerClick/DC9.png',
            thumbnail: 'react2/images/DealerClick/DC9Thumb.png',
        },
        {
            original: 'react2/images/DealerClick/DC10.png',
            thumbnail: 'react2/images/DealerClick/DC10Thumb.png',
        },
        {
            original: 'react2/images/DealerClick/DC11.png',
            thumbnail: 'react2/images/DealerClick/DC11Thumb.png',
        },
        {
            original: 'react2/images/DealerClick/DC12.png',
            thumbnail: 'react2/images/DealerClick/DC12Thumb.png',
        },
        {
            original: 'react2/images/DealerClick/DC13.png',
            thumbnail: 'react2/images/DealerClick/DC13Thumb.png',
        },
        {
            original: 'react2/images/DealerClick/DC14.png',
            thumbnail: 'react2/images/DealerClick/DC14Thumb.png',
        },
        {
            original: 'react2/images/DealerClick/DC15.png',
            thumbnail: 'react2/images/DealerClick/DC15Thumb.png',
        },
        {
            original: 'react2/images/DealerClick/DC16.png',
            thumbnail: 'react2/images/DealerClick/DC16Thumb.png',
        },
        {
            original: 'react2/images/DealerClick/DC17.png',
            thumbnail: 'react2/images/DealerClick/DC17Thumb.png',
        },
        {
            original: 'react2/images/DealerClick/DC18.png',
            thumbnail: 'react2/images/DealerClick/DC18Thumb.png',
        },
        {
            original: 'react2/images/DealerClick/DC19.png',
            thumbnail: 'react2/images/DealerClick/DC19Thumb.png',
        },
        {
            original: 'react2/images/DealerClick/DC20.png',
            thumbnail: 'react2/images/DealerClick/DC20Thumb.png',
        },
    ]
    return(
        <>
            <Gallery images={images} />
            <Brief name='DealerClick' 
            skills='HTML5, CSS3, WordPress' 
            projectBrief='Created his web design and prior developed her site' 
            companyInfo='Kevin Mitchel' />
        </>
    )
}