import React from 'react';
import '../../App.css';
import Brief from '../Brief';
import Gallery from '../Gallery';

export default function InstaSlim() {
    const images = [
        {
            original: 'react2/images/InstaSlim/IS1.jpg',
            thumbnail: 'react2/images/InstaSlim/IS1Thumb.jpg',
        },
        {
            original: 'react2/images/InstaSlim/IS2.png',
            thumbnail: 'react2/images/InstaSlim/IS2Thumb.png',
        },
        {
            original: 'react2/images/InstaSlim/IS3.png',
            thumbnail: 'react2/images/InstaSlim/IS3Thumb.png',
        },
        {
            original: 'react2/images/InstaSlim/IS4.png',
            thumbnail: 'react2/images/InstaSlim/IS4Thumb.png',
        },
        {
            original: 'react2/images/InstaSlim/IS5.png',
            thumbnail: 'react2/images/InstaSlim/IS5Thumb.png',
        },
        {
            original: 'react2/images/InstaSlim/IS6.png',
            thumbnail: 'react2/images/InstaSlim/IS6Thumb.png',
        },
        {
            original: 'react2/images/InstaSlim/IS7.png',
            thumbnail: 'react2/images/InstaSlim/IS7Thumb.png',
        },
        {
            original: 'react2/images/InstaSlim/IS8.png',
            thumbnail: 'react2/images/InstaSlim/IS8Thumb.png',
        },
        {
            original: 'react2/images/InstaSlim/IS9.png',
            thumbnail: 'react2/images/InstaSlim/IS9Thumb.png',
        },
        {
            original: 'react2/images/InstaSlim/IS10.png',
            thumbnail: 'react2/images/InstaSlim/IS10Thumb.png',
        },
        {
            original: 'react2/images/InstaSlim/IS11.png',
            thumbnail: 'react2/images/InstaSlim/IS11Thumb.png',
        },
        {
            original: 'react2/images/InstaSlim/IS12.png',
            thumbnail: 'react2/images/InstaSlim/IS12Thumb.png',
        },
        {
            original: 'react2/images/InstaSlim/IS13.png',
            thumbnail: 'react2/images/InstaSlim/IS13Thumb.png',
        },
        {
            original: 'react2/images/InstaSlim/IS14.png',
            thumbnail: 'react2/images/InstaSlim/IS14Thumb.png',
        },
        {
            original: 'react2/images/InstaSlim/IS15.png',
            thumbnail: 'react2/images/InstaSlim/IS15Thumb.png',
        },
        {
            original: 'react2/images/InstaSlim/IS16.png',
            thumbnail: 'react2/images/InstaSlim/IS16Thumb.png',
        },
        {
            original: 'react2/images/InstaSlim/IS17.png',
            thumbnail: 'react2/images/InstaSlim/IS17Thumb.png',
        },
        {
            original: 'react2/images/InstaSlim/IS18.png',
            thumbnail: 'react2/images/InstaSlim/IS18Thumb.png',
        },
        {
            original: 'react2/images/InstaSlim/IS19.png',
            thumbnail: 'react2/images/InstaSlim/IS19Thumb.png',
        },
        {
            original: 'react2/images/InstaSlim/IS20.png',
            thumbnail: 'react2/images/InstaSlim/IS20Thumb.png',
        },
        {
            original: 'react2/images/InstaSlim/IS21.png',
            thumbnail: 'react2/images/InstaSlim/IS21Thumb.png',
        },
        {
            original: 'react2/images/InstaSlim/IS22.png',
            thumbnail: 'react2/images/InstaSlim/IS22Thumb.png',
        },
        {
            original: 'react2/images/InstaSlim/IS23.png',
            thumbnail: 'react2/images/InstaSlim/IS23Thumb.png',
        },
        {
            original: 'react2/images/InstaSlim/IS24.png',
            thumbnail: 'react2/images/InstaSlim/IS24Thumb.png',
        },
        {
            original: 'react2/images/InstaSlim/IS25.png',
            thumbnail: 'react2/images/InstaSlim/IS25Thumb.png',
        },
        {
            original: 'react2/images/InstaSlim/IS26.png',
            thumbnail: 'react2/images/InstaSlim/IS26Thumb.png',
        },
    ]
    return(
        <>
            <Gallery images={images} />
            <Brief name='InstaSlim' 
            skills='HTML5, CSS3, OpenCart, Git, Sass' 
            projectBrief='Narges designed and developed a custom OpenCart theme from scratch for the InstaSlim. This E-Commerce website is 100% responsive.' 
            companyInfo='InstaSlim is an apparel manufacture creating compression shirt for men.' />
        </>
    )
}