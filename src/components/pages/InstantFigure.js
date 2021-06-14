import React from 'react';
import '../../App.css';
import Brief from '../Brief';
import Gallery from '../Gallery';

export default function InstantFigure() {
    const images = [
        {
            original: 'images/InstantFigure/IF2.png',
            thumbnail: 'images/InstantFigure/IF2Thumb.png',
        },
        {
            original: 'images/InstantFigure/IF1.jpg',
            thumbnail: 'images/InstantFigure/IF1Thumb.jpg',
        },
        {
            original: 'images/InstantFigure/IF3.png',
            thumbnail: 'images/InstantFigure/IF3Thumb.png',
        },
        {
            original: 'images/InstantFigure/IF5.png',
            thumbnail: 'images/InstantFigure/IF5Thumb.png',
        },
        {
            original: 'images/InstantFigure/IF7.png',
            thumbnail: 'images/InstantFigure/IF7Thumb.png',
        },
        {
            original: 'images/InstantFigure/IF8.png',
            thumbnail: 'images/InstantFigure/IF8Thumb.png',
        },
        {
            original: 'images/InstantFigure/IF9.png',
            thumbnail: 'images/InstantFigure/IF9Thumb.png',
        },
        {
            original: 'images/InstantFigure/IF10.png',
            thumbnail: 'images/InstantFigure/IF10Thumb.png',
        },
        {
            original: 'images/InstantFigure/IF11.png',
            thumbnail: 'images/InstantFigure/IF11Thumb.png',
        },
        {
            original: 'images/InstantFigure/IF12.png',
            thumbnail: 'images/InstantFigure/IF12Thumb.png',
        },
        {
            original: 'images/InstantFigure/IF13.png',
            thumbnail: 'images/InstantFigure/IF13Thumb.png',
        },
        {
            original: 'images/InstantFigure/IF14.png',
            thumbnail: 'images/InstantFigure/IF14Thumb.png',
        },
        {
            original: 'images/InstantFigure/IF15.png',
            thumbnail: 'images/InstantFigure/IF15Thumb.png',
        },
        {
            original: 'images/InstantFigure/IF16.png',
            thumbnail: 'images/InstantFigure/IF16Thumb.png',
        },
        {
            original: 'images/InstantFigure/IF17.png',
            thumbnail: 'images/InstantFigure/IF17Thumb.png',
        },
        {
            original: 'images/InstantFigure/IF18.png',
            thumbnail: 'images/InstantFigure/IF18Thumb.png',
        },
        {
            original: 'images/InstantFigure/IF19.png',
            thumbnail: 'images/InstantFigure/IF19Thumb.png',
        },
        {
            original: 'images/InstantFigure/IF20.png',
            thumbnail: 'images/InstantFigure/IF20Thumb.png',
        },
        {
            original: 'images/InstantFigure/IF21.png',
            thumbnail: 'images/InstantFigure/IF21Thumb.png',
        },
    ]
    return(
        <>
            <Gallery images={images} />
            <Brief name='InstantFigure INC' 
            skills='HTML5, CSS3, OpenCart' 
            projectBrief='Created her web design and prior developed her site' 
            companyInfo='Monir Jalili' />
        </>
    )
}