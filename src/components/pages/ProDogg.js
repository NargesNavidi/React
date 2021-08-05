import React from 'react';
import '../../App.css';
import Brief from '../Brief';
import Gallery from '../Gallery';

export default function ProDogg() {
    const images = [
        {
            original: 'react2/images/ProDogg/ProDogg1.jpg',
            thumbnail: 'react2/images/ProDogg/ProDogg1Thumb.jpg',
        },
        {
            original: 'react2/images/ProDogg/ProDogg2.png',
            thumbnail: 'react2/images/ProDogg/ProDogg2Thumb.png',
        },
        {
            original: 'react2/images/ProDogg/ProDogg3.png',
            thumbnail: 'react2/images/ProDogg/ProDogg3Thumb.png',
        },
        {
            original: 'react2/images/ProDogg/ProDogg4.png',
            thumbnail: 'react2/images/ProDogg/ProDogg4Thumb.png',
        },
        {
            original: 'react2/images/ProDogg/ProDogg5.png',
            thumbnail: 'react2/images/ProDogg/ProDogg5Thumb.png',
        },
        {
            original: 'react2/images/ProDogg/ProDogg6.png',
            thumbnail: 'react2/images/ProDogg/ProDogg6Thumb.png',
        },
        {
            original: 'react2/images/ProDogg/ProDogg7.png',
            thumbnail: 'react2/images/ProDogg/ProDogg7Thumb.png',
        },
        {
            original: 'react2/images/ProDogg/ProDogg8.png',
            thumbnail: 'react2/images/ProDogg/ProDogg8Thumb.png',
        },
        {
            original: 'react2/images/ProDogg/ProDogg9.png',
            thumbnail: 'react2/images/ProDogg/ProDogg9Thumb.png',
        },
        {
            original: 'react2/images/ProDogg/ProDogg10.png',
            thumbnail: 'react2/images/ProDogg/ProDogg10Thumb.png',
        },
        {
            original: 'react2/images/ProDogg/ProDogg11.png',
            thumbnail: 'react2/images/ProDogg/ProDogg11Thumb.png',
        },
        {
            original: 'react2/images/ProDogg/ProDogg12.png',
            thumbnail: 'react2/images/ProDogg/ProDogg12Thumb.png',
        },
        {
            original: 'react2/images/ProDogg/ProDogg13.png',
            thumbnail: 'react2/images/ProDogg/ProDogg13Thumb.png',
        },
        {
            original: 'react2/images/ProDogg/ProDogg14.png',
            thumbnail: 'react2/images/ProDogg/ProDogg14Thumb.png',
        },
    ]
    return(
        <>
            <Gallery images={images} />
            <Brief name='ProDogg' 
            skills='HTML5, CSS3, React' 
            projectBrief='Narges was responsible for both the design and the development of the ProDogg website. The website was built using a custom WordPress theme.' 
            companyInfo='Prodogg is a division of InstantFigure an apparel company that specializes in compression slimming shapewear. ProDogg offers a sleeveless compression shirt for dogs.'
            href="https://prodogg.com/"
            />
            Test
            
        </>
    )
}