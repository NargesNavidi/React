import React from 'react';
import '../../App.css';
import Brief from '../Brief';
import Gallery from '../Gallery';

export default function InstantFigure() {
    const images = [
        {
            original: 'react2/images/InstantFigure/IF2.png',
            thumbnail: 'react2/images/InstantFigure/IF2Thumb.png',
        },
        {
            original: 'react2/images/InstantFigure/IF1.jpg',
            thumbnail: 'react2/images/InstantFigure/IF1Thumb.jpg',
        },
        {
            original: 'react2/images/InstantFigure/IF3.png',
            thumbnail: 'react2/images/InstantFigure/IF3Thumb.png',
        },
        {
            original: 'react2/images/InstantFigure/IF5.png',
            thumbnail: 'react2/images/InstantFigure/IF5Thumb.png',
        },
        {
            original: 'react2/images/InstantFigure/IF7.png',
            thumbnail: 'react2/images/InstantFigure/IF7Thumb.png',
        },
        {
            original: 'react2/images/InstantFigure/IF8.png',
            thumbnail: 'react2/images/InstantFigure/IF8Thumb.png',
        },
        {
            original: 'react2/images/InstantFigure/IF9.png',
            thumbnail: 'react2/images/InstantFigure/IF9Thumb.png',
        },
        {
            original: 'react2/images/InstantFigure/IF10.png',
            thumbnail: 'react2/images/InstantFigure/IF10Thumb.png',
        },
        {
            original: 'react2/images/InstantFigure/IF11.png',
            thumbnail: 'react2/images/InstantFigure/IF11Thumb.png',
        },
        {
            original: 'react2/images/InstantFigure/IF12.png',
            thumbnail: 'react2/images/InstantFigure/IF12Thumb.png',
        },
        {
            original: 'react2/images/InstantFigure/IF13.png',
            thumbnail: 'react2/images/InstantFigure/IF13Thumb.png',
        },
        {
            original: 'react2/images/InstantFigure/IF14.png',
            thumbnail: 'react2/images/InstantFigure/IF14Thumb.png',
        },
        {
            original: 'react2/images/InstantFigure/IF15.png',
            thumbnail: 'react2/images/InstantFigure/IF15Thumb.png',
        },
        {
            original: 'react2/images/InstantFigure/IF16.png',
            thumbnail: 'react2/images/InstantFigure/IF16Thumb.png',
        },
        {
            original: 'react2/images/InstantFigure/IF17.png',
            thumbnail: 'react2/images/InstantFigure/IF17Thumb.png',
        },
        {
            original: 'react2/images/InstantFigure/IF18.png',
            thumbnail: 'react2/images/InstantFigure/IF18Thumb.png',
        },
        {
            original: 'react2/images/InstantFigure/IF19.png',
            thumbnail: 'react2/images/InstantFigure/IF19Thumb.png',
        },
        {
            original: 'react2/images/InstantFigure/IF20.png',
            thumbnail: 'react2/images/InstantFigure/IF20Thumb.png',
        },
        {
            original: 'react2/images/InstantFigure/IF21.png',
            thumbnail: 'react2/images/InstantFigure/IF21Thumb.png',
        },
    ]
    return(
        <>
            <Gallery images={images} />
            <Brief name='InstantFigure INC' 
            skills='HTML5, CSS3, OpenCart, PhotoShop, Illustrator' 
            projectBrief='Narges designed and developed a custom OpenCart theme from scratch for the InstantRecoveryMD. This E-Commerce website is 100% responsive.' 
            companyInfo='InstantFigure is a world-renowned apparel company offering the ultimate compression slimming shapewear, as well as stylish tops, bottoms, swimwear. InstantFigure founder Monir Jalili is a veteran of the fashion industry.'
            href="https://instantfigure.com/"
            />
        </>
    )
}