import React from 'react';
import '../../App.css';
import Brief from '../Brief';
import Gallery from '../Gallery';

export default function AuraWayOfLife() {
    const images = [
        {
            original: 'images/Aura/Aura01.jpg',
            thumbnail: 'images/Aura/Aura01Thumb.jpg',
        },
        {
            original: 'images/Aura/Aura1.png',
            thumbnail: 'images/Aura/Aura1Thumb.png',
        },
        {
            original: 'images/Aura/Aura2.png',
            thumbnail: 'images/Aura/Aura2Thumb.png',
        },
        {
            original: 'images/Aura/Aura3.png',
            thumbnail: 'images/Aura/Aura3Thumb.png',
        },
        {
            original: 'images/Aura/Aura5.png',
            thumbnail: 'images/Aura/Aura5Thumb.png',
        },
        {
            original: 'images/Aura/Aura6.png',
            thumbnail: 'images/Aura/Aura6Thumb.png',
        },
        {
            original: 'images/Aura/Aura7.png',
            thumbnail: 'images/Aura/Aura7Thumb.png',
        },
        {
            original: 'images/Aura/Aura8.png',
            thumbnail: 'images/Aura/Aura8Thumb.png',
        },
        {
            original: 'images/Aura/Aura9.png',
            thumbnail: 'images/Aura/Aura9Thumb.png',
        },
        {
            original: 'images/Aura/Aura10.png',
            thumbnail: 'images/Aura/Aura10Thumb.png',
        },
        {
            original: 'images/Aura/Aura11.png',
            thumbnail: 'images/Aura/Aura11Thumb.png',
        },
        {
            original: 'images/Aura/Aura12.png',
            thumbnail: 'images/Aura/Aura12Thumb.png',
        },
        {
            original: 'images/Aura/Aura13.png',
            thumbnail: 'images/Aura/Aura13Thumb.png',
        },
        {
            original: 'images/Aura/Aura14.png',
            thumbnail: 'images/Aura/Aura14Thumb.png',
        },
        {
            original: 'images/Aura/Aura15.png',
            thumbnail: 'images/Aura/Aura15Thumb.png',
        },
        {
            original: 'images/Aura/Aura16.png',
            thumbnail: 'images/Aura/Aura16Thumb.png',
        },
        {
            original: 'images/Aura/Aura17.png',
            thumbnail: 'images/Aura/Aura17Thumb.png',
        },
    ]
    return(
        <>
            <Gallery images={images} />
            <Brief name='Aura Way Of Life Spa' 
            skills='HTML5, CSS3, WordPress' 
            projectBrief='Created her web design and prior developed her site' 
            companyInfo='Afsaneh Tesolin is the founder of the total wellness retreat center Aura Way of Life Spa in Laguna Beach, California. Aura Way of Life Spa began as a post operative center for cosmetic plastic surgery patients. This allowed Afsaneh to work with some of the finest plastic surgeons in Southern California. Seeing the amount of recovery time from these surgeries first hand inspired Afsaneh to search for an alternative that offered great results without the downtime. This research led Afsaneh to Exilis.' />
        </>
    )
}