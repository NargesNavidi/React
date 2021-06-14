import React from 'react';
import '../../App.css';
import Brief from '../Brief';
import Gallery from '../Gallery';

export default function YourDealerLicense(){
    const images = [
        {
            original: 'images/YourDealerLicense/YDL1.png',
            thumbnail: 'images/YourDealerLicense/YDL1Thumb.png',
        },
        {
            original: 'images/YourDealerLicense/YDL2.png',
            thumbnail: 'images/YourDealerLicense/YDL2Thumb.png',
        },
        {
            original: 'images/YourDealerLicense/YDL3.png',
            thumbnail: 'images/YourDealerLicense/YDL3Thumb.png',
        },
        {
            original: 'images/YourDealerLicense/YDL4.png',
            thumbnail: 'images/YourDealerLicense/YDL4Thumb.png',
        },
        {
            original: 'images/YourDealerLicense/YDL5.png',
            thumbnail: 'images/YourDealerLicense/YDL5Thumb.png',
        },
        {
            original: 'images/YourDealerLicense/YDL6.png',
            thumbnail: 'images/YourDealerLicense/YDL6Thumb.png',
        },
        {
            original: 'images/YourDealerLicense/YDL7.png',
            thumbnail: 'images/YourDealerLicense/YDL7Thumb.png',
        },
        {
            original: 'images/YourDealerLicense/YDL8.png',
            thumbnail: 'images/YourDealerLicense/YDL8Thumb.png',
        },
        {
            original: 'images/YourDealerLicense/YDL9.png',
            thumbnail: 'images/YourDealerLicense/YDL9Thumb.png',
        },
        {
            original: 'images/YourDealerLicense/YDL10.png',
            thumbnail: 'images/YourDealerLicense/YDL10Thumb.png',
        },
        {
            original: 'images/YourDealerLicense/YDL11.png',
            thumbnail: 'images/YourDealerLicense/YDL11Thumb.png',
        },
        {
            original: 'images/YourDealerLicense/YDL12.png',
            thumbnail: 'images/YourDealerLicense/YDL12Thumb.png',
        },
        {
            original: 'images/YourDealerLicense/YDL13.png',
            thumbnail: 'images/YourDealerLicense/YDL13Thumb.png',
        },
        {
            original: 'images/YourDealerLicense/YDL14.png',
            thumbnail: 'images/YourDealerLicense/YDL14Thumb.png',
        },
        {
            original: 'images/YourDealerLicense/YDL15.png',
            thumbnail: 'images/YourDealerLicense/YDL15Thumb.png',
        },
        {
            original: 'images/YourDealerLicense/YDL16.png',
            thumbnail: 'images/YourDealerLicense/YDL16Thumb.png',
        },
        {
            original: 'images/YourDealerLicense/YDL17.png',
            thumbnail: 'images/YourDealerLicense/YDL17Thumb.png',
        },
        {
            original: 'images/YourDealerLicense/YDL18.png',
            thumbnail: 'images/YourDealerLicense/YDL18Thumb.png',
        },
        {
            original: 'images/YourDealerLicense/YDL19.png',
            thumbnail: 'images/YourDealerLicense/YDL19Thumb.png',
        },
        {
            original: 'images/YourDealerLicense/YDL20.png',
            thumbnail: 'images/YourDealerLicense/YDL20Thumb.png',
        },
    ]
    return(
        <>
            <Gallery images={images} />
            <Brief name='Your Dealer License'
            skills='HTML5, CSS3, WordPress' 
            projectBrief='Created his web design and prior developed her site' 
            companyInfo='Kevin Mitchel' />
        </>
    )
}