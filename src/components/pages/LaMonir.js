import React from 'react';
import '../../App.css';
import Brief from '../Brief';
import Gallery from '../Gallery';

export default function LaMonir() {
    const images = [
        {
            original: 'react2/images/LaMonir/LaMonir1.jpg',
            thumbnail: 'react2/images/LaMonir/LaMonir1Thumb.jpg',
        },
        {
            original: 'react2/images/LaMonir/LaMonir2.png',
            thumbnail: 'react2/images/LaMonir/LaMonir2Thumb.png',
        },
        {
            original: 'react2/images/LaMonir/LaMonir3.png',
            thumbnail: 'react2/images/LaMonir/LaMonir3Thumb.png',
        },
        {
            original: 'react2/images/LaMonir/LaMonir4.png',
            thumbnail: 'react2/images/LaMonir/LaMonir4Thumb.png',
        },
        {
            original: 'react2/images/LaMonir/LaMonir5.png',
            thumbnail: 'react2/images/LaMonir/LaMonir5Thumb.png',
        },
        {
            original: 'react2/images/LaMonir/LaMonir6.png',
            thumbnail: 'react2/images/LaMonir/LaMonir6Thumb.png',
        },
        {
            original: 'react2/images/LaMonir/LaMonir7.png',
            thumbnail: 'react2/images/LaMonir/LaMonir7Thumb.png',
        },
        {
            original: 'react2/images/LaMonir/LaMonir8.png',
            thumbnail: 'react2/images/LaMonir/LaMonir8Thumb.png',
        },
        {
            original: 'react2/images/LaMonir/LaMonir9.png',
            thumbnail: 'react2/images/LaMonir/LaMonir9Thumb.png',
        },
    ]
    return(
        <>
            <Gallery images={images} />
            <Brief name='LaMonir' 
            skills='HTML5, CSS3, WordPress ' 
            projectBrief='Narges designed and developed a custom OpenCart theme from scratch for the LaMonir. This E-Commerce website is 100% responsive.' 
            companyInfo='Monir Jalili and Houshang Jalili Created and Designed InstantFigure and all its brands which is IF PRO USA, La Monir, IS PRO USA, Insta Slim, IS PRO Tactical, InstantRecoveryMD, InstantBeauty, ProDoggShirt' />
        </>
    )
}