import React from 'react';
import '../../App.css';
import Brief from '../Brief';
import Gallery from '../Gallery';

export default function PickMyAuto() {
    const images = [
        {
            original: 'images/PickMyAuto/PMA1.png',
            thumbnail: 'images/PickMyAuto/PMA1Thumb.png',
        },
        {
            original: 'images/PickMyAuto/PMA2.png',
            thumbnail: 'images/PickMyAuto/PMA2Thumb.png',
        },
        {
            original: 'images/PickMyAuto/PMA3.png',
            thumbnail: 'images/PickMyAuto/PMA3Thumb.png',
        },
        {
            original: 'images/PickMyAuto/PMA4.png',
            thumbnail: 'images/PickMyAuto/PMA4Thumb.png',
        },
        {
            original: 'images/PickMyAuto/PMA5.png',
            thumbnail: 'images/PickMyAuto/PMA5Thumb.png',
        },
        {
            original: 'images/PickMyAuto/PMA6.png',
            thumbnail: 'images/PickMyAuto/PMA6Thumb.png',
        },
        {
            original: 'images/PickMyAuto/PMA7.png',
            thumbnail: 'images/PickMyAuto/PMA7Thumb.png',
        },
        {
            original: 'images/PickMyAuto/PMA8.png',
            thumbnail: 'images/PickMyAuto/PMA8Thumb.png',
        },
        {
            original: 'images/PickMyAuto/PMA9.png',
            thumbnail: 'images/PickMyAuto/PMA9Thumb.png',
        },
        {
            original: 'images/PickMyAuto/PMA10.png',
            thumbnail: 'images/PickMyAuto/PMA10Thumb.png',
        },
    ]
    return(
        <>
            <Gallery images={images} />
            <Brief name='PickMyAuto' 
            skills='HTML5, CSS3, Sass, jQuary ' 
            projectBrief='Created web design and prior developed her site' 
            companyInfo='DealerClick Invested to creat a app' />
        </>
    )
}