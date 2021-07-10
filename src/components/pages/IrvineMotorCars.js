import React from 'react';
import '../../App.css';
import Brief from '../Brief';
import Gallery from '../Gallery';

export default function IrvineMotorCars() {
    const images = [
        {
            original: 'react2/images/IrvineMotorCars/IrvineM1.png',
            thumbnail: 'react2/images/IrvineMotorCars/IrvineM1Thumb.png',
        },
        {
            original: 'react2/images/IrvineMotorCars/IrvineM2.png',
            thumbnail: 'react2/images/IrvineMotorCars/IrvineM2Thumb.png',
        },
        {
            original: 'react2/images/IrvineMotorCars/IrvineM3.png',
            thumbnail: 'react2/images/IrvineMotorCars/IrvineM3Thumb.png',
        },
        {
            original: 'react2/images/IrvineMotorCars/IrvineM4.png',
            thumbnail: 'react2/images/IrvineMotorCars/IrvineM4Thumb.png',
        },
        {
            original: 'react2/images/IrvineMotorCars/IrvineM5.png',
            thumbnail: 'react2/images/IrvineMotorCars/IrvineM5Thumb.png',
        },
    ]
    return(
        <>
            <Gallery images={images} />
            <Brief name='Irvine MotorCars' 
            skills='HTML5, CSS3, Sass, jQuary ' 
            projectBrief='Created web design and prior developed her site' 
            companyInfo='Irvine MotorCars Invested to creat a app'
            href="https://irvinemotorcars.com/"
            />
        </>
    )
}