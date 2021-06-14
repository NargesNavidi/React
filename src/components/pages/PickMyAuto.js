import React from 'react';
import '../../App.css';
import Brief from '../Brief';
import Gallery from '../Gallery';

export default function PickMyAuto() {
    const images = [
        {
            original: 'react2/images/PickMyAuto/PMA1.png',
            thumbnail: 'react2/images/PickMyAuto/PMA1Thumb.png',
        },
        {
            original: 'react2/images/PickMyAuto/PMA2.png',
            thumbnail: 'react2/images/PickMyAuto/PMA2Thumb.png',
        },
        {
            original: 'react2/images/PickMyAuto/PMA3.png',
            thumbnail: 'react2/images/PickMyAuto/PMA3Thumb.png',
        },
        {
            original: 'react2/images/PickMyAuto/PMA4.png',
            thumbnail: 'react2/images/PickMyAuto/PMA4Thumb.png',
        },
        {
            original: 'react2/images/PickMyAuto/PMA5.png',
            thumbnail: 'react2/images/PickMyAuto/PMA5Thumb.png',
        },
        {
            original: 'react2/images/PickMyAuto/PMA6.png',
            thumbnail: 'react2/images/PickMyAuto/PMA6Thumb.png',
        },
        {
            original: 'react2/images/PickMyAuto/PMA7.png',
            thumbnail: 'react2/images/PickMyAuto/PMA7Thumb.png',
        },
        {
            original: 'react2/images/PickMyAuto/PMA8.png',
            thumbnail: 'react2/images/PickMyAuto/PMA8Thumb.png',
        },
        {
            original: 'react2/images/PickMyAuto/PMA9.png',
            thumbnail: 'react2/images/PickMyAuto/PMA9Thumb.png',
        },
        {
            original: 'react2/images/PickMyAuto/PMA10.png',
            thumbnail: 'react2/images/PickMyAuto/PMA10Thumb.png',
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