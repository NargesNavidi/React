import React from 'react';
import '../../App.css';
import Brief from '../Brief';
import Gallery from '../Gallery';

export default function OrganicShop() {
    const images = [
        {
            original: 'images/OrganicShop/Org1.png',
            thumbnail: 'images/OrganicShop/Org1Thumb.png',
        },
        {
            original: 'images/OrganicShop/Org2.png',
            thumbnail: 'images/OrganicShop/Org2Thumb.png',
        },
        {
            original: 'images/OrganicShop/Org3.png',
            thumbnail: 'images/OrganicShop/Org3Thumb.png',
        },
        {
            original: 'images/OrganicShop/Org4.png',
            thumbnail: 'images/OrganicShop/Org4Thumb.png',
        },
        {
            original: 'images/OrganicShop/Org5.png',
            thumbnail: 'images/OrganicShop/Org5Thumb.png',
        }
    ]
    return(
        <>
            <Gallery images={images} />
            <Brief name='Organic Shop' 
            skills='HTML5, CSS3, WordPress' 
            projectBrief='Created her web design and prior developed her site' 
            companyInfo='Afsaneh Tesolin is the founder of the total wellness retreat center Aura Way of Life Spa in Laguna Beach, California. Aura Way of Life Spa began as a post operative center for cosmetic plastic surgery patients. This allowed Afsaneh to work with some of the finest plastic surgeons in Southern California. Seeing the amount of recovery time from these surgeries first hand inspired Afsaneh to search for an alternative that offered great results without the downtime. This research led Afsaneh to Exilis.' />
        </>
    )
}