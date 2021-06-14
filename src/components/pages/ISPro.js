import React from 'react';
import '../../App.css';
import Brief from '../Brief';
import Gallery from '../Gallery';

export default function ISPro() {
    const images = [
        {
            original: 'react2/images/ISPro/ISPro1.jpg',
            thumbnail: 'react2/images/ISPro/ISPro1Thumb.jpg',
        },
        {
            original: 'react2/images/ISPro/ISPro2.png',
            thumbnail: 'react2/images/ISPro/ISPro2Thumb.png',
        },
        {
            original: 'react2/images/ISPro/ISPro3.png',
            thumbnail: 'react2/images/ISPro/ISPro3Thumb.png',
        },
        {
            original: 'react2/images/ISPro/ISPro4.png',
            thumbnail: 'react2/images/ISPro/ISPro4Thumb.png',
        },
        {
            original: 'react2/images/ISPro/ISPro5.png',
            thumbnail: 'react2/images/ISPro/ISPro5Thumb.png',
        },
        {
            original: 'react2/images/ISPro/ISPro6.png',
            thumbnail: 'react2/images/ISPro/ISPro6Thumb.png',
        },
        {
            original: 'react2/images/ISPro/ISPro7.png',
            thumbnail: 'react2/images/ISPro/ISPro7Thumb.png',
        },
        {
            original: 'react2/images/ISPro/ISPro8.png',
            thumbnail: 'react2/images/ISPro/ISPro8Thumb.png',
        },
        {
            original: 'react2/images/ISPro/ISPro9.png',
            thumbnail: 'react2/images/ISPro/ISPro9Thumb.png',
        },
    ]
    return(
        <>
            <Gallery images={images} />
            <Brief name='ISPro' 
            skills='HTML5, CSS3, OpenCart' 
            projectBrief='Created her web design and prior developed her site' 
            companyInfo='Houshang Jalili' />
        </>
    )
}