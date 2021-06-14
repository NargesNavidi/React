import React from 'react';
import '../../App.css';
import Brief from '../Brief';
import Gallery from '../Gallery';

export default function InstaSlim() {
    const images = [
        {
            original: 'images/InstaSlim/IS1.jpg',
            thumbnail: 'images/InstaSlim/IS1Thumb.jpg',
        },
        {
            original: 'images/InstaSlim/IS2.png',
            thumbnail: 'images/InstaSlim/IS2Thumb.png',
        },
        {
            original: 'images/InstaSlim/IS3.png',
            thumbnail: 'images/InstaSlim/IS3Thumb.png',
        },
        {
            original: 'images/InstaSlim/IS4.png',
            thumbnail: 'images/InstaSlim/IS4Thumb.png',
        },
        {
            original: 'images/InstaSlim/IS5.png',
            thumbnail: 'images/InstaSlim/IS5Thumb.png',
        },
        {
            original: 'images/InstaSlim/IS6.png',
            thumbnail: 'images/InstaSlim/IS6Thumb.png',
        },
        {
            original: 'images/InstaSlim/IS7.png',
            thumbnail: 'images/InstaSlim/IS7Thumb.png',
        },
        {
            original: 'images/InstaSlim/IS8.png',
            thumbnail: 'images/InstaSlim/IS8Thumb.png',
        },
        {
            original: 'images/InstaSlim/IS9.png',
            thumbnail: 'images/InstaSlim/IS9Thumb.png',
        },
        {
            original: 'images/InstaSlim/IS10.png',
            thumbnail: 'images/InstaSlim/IS10Thumb.png',
        },
        {
            original: 'images/InstaSlim/IS11.png',
            thumbnail: 'images/InstaSlim/IS11Thumb.png',
        },
        {
            original: 'images/InstaSlim/IS12.png',
            thumbnail: 'images/InstaSlim/IS12Thumb.png',
        },
        {
            original: 'images/InstaSlim/IS13.png',
            thumbnail: 'images/InstaSlim/IS13Thumb.png',
        },
        {
            original: 'images/InstaSlim/IS14.png',
            thumbnail: 'images/InstaSlim/IS14Thumb.png',
        },
        {
            original: 'images/InstaSlim/IS15.png',
            thumbnail: 'images/InstaSlim/IS15Thumb.png',
        },
        {
            original: 'images/InstaSlim/IS16.png',
            thumbnail: 'images/InstaSlim/IS16Thumb.png',
        },
        {
            original: 'images/InstaSlim/IS17.png',
            thumbnail: 'images/InstaSlim/IS17Thumb.png',
        },
        {
            original: 'images/InstaSlim/IS18.png',
            thumbnail: 'images/InstaSlim/IS18Thumb.png',
        },
        {
            original: 'images/InstaSlim/IS19.png',
            thumbnail: 'images/InstaSlim/IS19Thumb.png',
        },
        {
            original: 'images/InstaSlim/IS20.png',
            thumbnail: 'images/InstaSlim/IS20Thumb.png',
        },
        {
            original: 'images/InstaSlim/IS21.png',
            thumbnail: 'images/InstaSlim/IS21Thumb.png',
        },
        {
            original: 'images/InstaSlim/IS22.png',
            thumbnail: 'images/InstaSlim/IS22Thumb.png',
        },
        {
            original: 'images/InstaSlim/IS23.png',
            thumbnail: 'images/InstaSlim/IS23Thumb.png',
        },
        {
            original: 'images/InstaSlim/IS24.png',
            thumbnail: 'images/InstaSlim/IS24Thumb.png',
        },
        {
            original: 'images/InstaSlim/IS25.png',
            thumbnail: 'images/InstaSlim/IS25Thumb.png',
        },
        {
            original: 'images/InstaSlim/IS26.png',
            thumbnail: 'images/InstaSlim/IS26Thumb.png',
        },
    ]
    return(
        <>
            <Gallery images={images} />
            <Brief name='InstaSlim' 
            skills='HTML5, CSS3, OpenCart' 
            projectBrief='Created her web design and prior developed her site' 
            companyInfo='Houshang Jalili' />
        </>
    )
}