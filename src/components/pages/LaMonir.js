import React from 'react';
import '../../App.css';
import Brief from '../Brief';
import Gallery from '../Gallery';

export default function LaMonir() {
    const images = [
        {
            original: 'images/LaMonir/LaMonir1.jpg',
            thumbnail: 'images/LaMonir/LaMonir1Thumb.jpg',
        },
        {
            original: 'images/LaMonir/LaMonir2.png',
            thumbnail: 'images/LaMonir/LaMonir2Thumb.png',
        },
        {
            original: 'images/LaMonir/LaMonir3.png',
            thumbnail: 'images/LaMonir/LaMonir3Thumb.png',
        },
        {
            original: 'images/LaMonir/LaMonir4.png',
            thumbnail: 'images/LaMonir/LaMonir4Thumb.png',
        },
        {
            original: 'images/LaMonir/LaMonir5.png',
            thumbnail: 'images/LaMonir/LaMonir5Thumb.png',
        },
        {
            original: 'images/LaMonir/LaMonir6.png',
            thumbnail: 'images/LaMonir/LaMonir6Thumb.png',
        },
        {
            original: 'images/LaMonir/LaMonir7.png',
            thumbnail: 'images/LaMonir/LaMonir7Thumb.png',
        },
        {
            original: 'images/LaMonir/LaMonir8.png',
            thumbnail: 'images/LaMonir/LaMonir8Thumb.png',
        },
        {
            original: 'images/LaMonir/LaMonir9.png',
            thumbnail: 'images/LaMonir/LaMonir9Thumb.png',
        },
    ]
    return(
        <>
            <Gallery images={images} />
            <Brief name='LaMonir' 
            skills='HTML5, CSS3, WordPress ' 
            projectBrief='Created her web design and prior developed her site' 
            companyInfo='Monir Jalili' />
        </>
    )
}