import React from 'react';
import '../../App.css';
import Brief from '../Brief';
import Gallery from '../Gallery';

export default function OrganicShop() {
    const images = [
        {
            original: 'react2/images/OrganicShop/Org1.png',
            thumbnail: 'react2/images/OrganicShop/Org1Thumb.png',
        },
        {
            original: 'react2/images/OrganicShop/Org2.png',
            thumbnail: 'react2/images/OrganicShop/Org2Thumb.png',
        },
        {
            original: 'react2/images/OrganicShop/Org3.png',
            thumbnail: 'react2/images/OrganicShop/Org3Thumb.png',
        },
        {
            original: 'react2/images/OrganicShop/Org4.png',
            thumbnail: 'react2/images/OrganicShop/Org4Thumb.png',
        },
        {
            original: 'react2/images/OrganicShop/Org5.png',
            thumbnail: 'react2/images/OrganicShop/Org5Thumb.png',
        }
    ]
    return(
        <>
            <Gallery images={images} />
            <Brief name='Organic Shop' 
            skills='HTML5, CSS3, Angular9, Angular 10, Git' 
            projectBrief='Narges developed a real world E-Commerce application with Angular 9 and upgraded it to Angular 10 ' 
            companyInfo='Personal Project ' 
            path='dev.nnavidi.com'
            />
        </>
    )
}