import React from 'react';
import '../../App.css';
import Brief from '../Brief';
import Gallery from '../Gallery';

export default function CarBuying() {
    const images = [
        {
            original: 'react2/images/123CarBuying/123Car1.png',
            thumbnail: 'react2/images/123CarBuying/123Car1Thumb.png',
        },
        {
            original: 'react2/images/123CarBuying/123Car2.png',
            thumbnail: 'react2/images/123CarBuying/123Car2Thumb.png',
        },
        {
            original: 'react2/images/123CarBuying/123Car3.png',
            thumbnail: 'react2/images/123CarBuying/123Car3Thumb.png',
        },
    ]
    return(
        <>
            <Gallery images={images} />
            <Brief name='123CarBuying' 
            skills='HTML5, CSS3, Sass, jQuary ' 
            projectBrief='Created web design and prior developed her site' 
            companyInfo='Irvine MotorCars Invested to creat a app' />
        </>
    )
}