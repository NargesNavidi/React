import React from 'react';
import '../../App.css';
import Brief from '../Brief';
import Gallery from '../Gallery';

export default function DealerClick() {
    const images = [
        {
            original: 'images/DealerClick/DC1.png',
            thumbnail: 'images/DealerClick/DC1Thumb.png',
        },
        {
            original: 'images/DealerClick/DC2.png',
            thumbnail: 'images/DealerClick/DC2Thumb.png',
        },
        {
            original: 'images/DealerClick/DC3.png',
            thumbnail: 'images/DealerClick/DC3Thumb.png',
        },
        {
            original: 'images/DealerClick/DC4.png',
            thumbnail: 'images/DealerClick/DC4Thumb.png',
        },
        {
            original: 'images/DealerClick/DC5.png',
            thumbnail: 'images/DealerClick/DC5Thumb.png',
        },
        {
            original: 'images/DealerClick/DC6.png',
            thumbnail: 'images/DealerClick/DC6Thumb.png',
        },
        {
            original: 'images/DealerClick/DC7.png',
            thumbnail: 'images/DealerClick/DC7Thumb.png',
        },
        {
            original: 'images/DealerClick/DC8.png',
            thumbnail: 'images/DealerClick/DC8Thumb.png',
        },
        {
            original: 'images/DealerClick/DC9.png',
            thumbnail: 'images/DealerClick/DC9Thumb.png',
        },
        {
            original: 'images/DealerClick/DC10.png',
            thumbnail: 'images/DealerClick/DC10Thumb.png',
        },
        {
            original: 'images/DealerClick/DC11.png',
            thumbnail: 'images/DealerClick/DC11Thumb.png',
        },
        {
            original: 'images/DealerClick/DC12.png',
            thumbnail: 'images/DealerClick/DC12Thumb.png',
        },
        {
            original: 'images/DealerClick/DC13.png',
            thumbnail: 'images/DealerClick/DC13Thumb.png',
        },
        {
            original: 'images/DealerClick/DC14.png',
            thumbnail: 'images/DealerClick/DC14Thumb.png',
        },
        {
            original: 'images/DealerClick/DC15.png',
            thumbnail: 'images/DealerClick/DC15Thumb.png',
        },
        {
            original: 'images/DealerClick/DC16.png',
            thumbnail: 'images/DealerClick/DC16Thumb.png',
        },
        {
            original: 'images/DealerClick/DC17.png',
            thumbnail: 'images/DealerClick/DC17Thumb.png',
        },
        {
            original: 'images/DealerClick/DC18.png',
            thumbnail: 'images/DealerClick/DC18Thumb.png',
        },
        {
            original: 'images/DealerClick/DC19.png',
            thumbnail: 'images/DealerClick/DC19Thumb.png',
        },
        {
            original: 'images/DealerClick/DC20.png',
            thumbnail: 'images/DealerClick/DC20Thumb.png',
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