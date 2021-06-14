import React from 'react';
import '../../App.css';
import Brief from '../Brief';
import Gallery from '../Gallery';

export default function IrvineMotorCars() {
    const images = [
        {
            original: 'images/IrvineMotorCars/IrvineM1.png',
            thumbnail: 'images/IrvineMotorCars/IrvineM1Thumb.png',
        },
        {
            original: 'images/IrvineMotorCars/IrvineM2.png',
            thumbnail: 'images/IrvineMotorCars/IrvineM2Thumb.png',
        },
        {
            original: 'images/IrvineMotorCars/IrvineM3.png',
            thumbnail: 'images/IrvineMotorCars/IrvineM3Thumb.png',
        },
        {
            original: 'images/IrvineMotorCars/IrvineM4.png',
            thumbnail: 'images/IrvineMotorCars/IrvineM4Thumb.png',
        },
        {
            original: 'images/IrvineMotorCars/IrvineM5.png',
            thumbnail: 'images/IrvineMotorCars/IrvineM5Thumb.png',
        },
    ]
    return(
        <>
            <Gallery images={images} />
            <Brief name='Irvine MotorCars' 
            skills='HTML5, CSS3, Sass, jQuary ' 
            projectBrief='Created web design and prior developed her site' 
            companyInfo='Irvine MotorCars Invested to creat a app' />
        </>
    )
}