import React from 'react';
import '../../App.css';
import Brief from '../Brief';
import Gallery from '../Gallery';

export default function ProDogg() {
    const images = [
        {
            original: 'images/ProDogg/ProDogg1.jpg',
            thumbnail: 'images/ProDogg/ProDogg1Thumb.jpg',
        },
        {
            original: 'images/ProDogg/ProDogg2.png',
            thumbnail: 'images/ProDogg/ProDogg2Thumb.png',
        },
        {
            original: 'images/ProDogg/ProDogg3.png',
            thumbnail: 'images/ProDogg/ProDogg3Thumb.png',
        },
        {
            original: 'images/ProDogg/ProDogg4.png',
            thumbnail: 'images/ProDogg/ProDogg4Thumb.png',
        },
        {
            original: 'images/ProDogg/ProDogg5.png',
            thumbnail: 'images/ProDogg/ProDogg5Thumb.png',
        },
        {
            original: 'images/ProDogg/ProDogg6.png',
            thumbnail: 'images/ProDogg/ProDogg6Thumb.png',
        },
        {
            original: 'images/ProDogg/ProDogg7.png',
            thumbnail: 'images/ProDogg/ProDogg7Thumb.png',
        },
        {
            original: 'images/ProDogg/ProDogg8.png',
            thumbnail: 'images/ProDogg/ProDogg8Thumb.png',
        },
        {
            original: 'images/ProDogg/ProDogg9.png',
            thumbnail: 'images/ProDogg/ProDogg9Thumb.png',
        },
        {
            original: 'images/ProDogg/ProDogg10.png',
            thumbnail: 'images/ProDogg/ProDogg10Thumb.png',
        },
        {
            original: 'images/ProDogg/ProDogg11.png',
            thumbnail: 'images/ProDogg/ProDogg11Thumb.png',
        },
        {
            original: 'images/ProDogg/ProDogg12.png',
            thumbnail: 'images/ProDogg/ProDogg12Thumb.png',
        },
        {
            original: 'images/ProDogg/ProDogg13.png',
            thumbnail: 'images/ProDogg/ProDogg13Thumb.png',
        },
        {
            original: 'images/ProDogg/ProDogg14.png',
            thumbnail: 'images/ProDogg/ProDogg14Thumb.png',
        },
    ]
    return(
        <>
            <Gallery images={images} />
            <Brief name='ProDogg' 
            skills='HTML5, CSS3, React' 
            projectBrief='Created her web design and prior developed her site' 
            companyInfo='Monir and Houshang' />
        </>
    )
}