import React from 'react';
import '../../App.css';
import Brief from '../Brief';
import Gallery from '../Gallery';

export default function TerraMota() {
    const images = [
        {
            original: 'images/TerraMota/Terra1.png',
            thumbnail: 'images/TerraMota/Terra1Thumb.png',
        },
        {
            original: 'images/TerraMota/Terra2.png',
            thumbnail: 'images/TerraMota/Terra2Thumb.png',
        },
        {
            original: 'images/TerraMota/Terra3.png',
            thumbnail: 'images/TerraMota/Terra3Thumb.png',
        },
        {
            original: 'images/TerraMota/Terra4.png',
            thumbnail: 'images/TerraMota/Terra4Thumb.png',
        },
        {
            original: 'images/TerraMota/Terra5.png',
            thumbnail: 'images/TerraMota/Terra5Thumb.png',
        },
        {
            original: 'images/TerraMota/Terra6.png',
            thumbnail: 'images/TerraMota/Terra6Thumb.png',
        },
        {
            original: 'images/TerraMota/Terra7.png',
            thumbnail: 'images/TerraMota/Terra7Thumb.png',
        },
        {
            original: 'images/TerraMota/Terra8.png',
            thumbnail: 'images/TerraMota/Terra8Thumb.png',
        },
        {
            original: 'images/TerraMota/Terra9.png',
            thumbnail: 'images/TerraMota/Terra9Thumb.png',
        },
        {
            original: 'images/TerraMota/Terra10.png',
            thumbnail: 'images/TerraMota/Terra10Thumb.png',
        },
        {
            original: 'images/TerraMota/Terra11.png',
            thumbnail: 'images/TerraMota/Terra11Thumb.png',
        },
        {
            original: 'images/TerraMota/Terra12.png',
            thumbnail: 'images/TerraMota/Terra12Thumb.png',
        },
        {
            original: 'images/TerraMota/Terra13.png',
            thumbnail: 'images/TerraMota/Terra13Thumb.png',
        },
        {
            original: 'images/TerraMota/Terra14.png',
            thumbnail: 'images/TerraMota/Terra14Thumb.png',
        },
        {
            original: 'images/TerraMota/Terra15.png',
            thumbnail: 'images/TerraMota/Terra15Thumb.png',
        }
    ]
    return(
        <>
            <Gallery images={images} />
            <Brief name='TerraMota' 
            skills='HTML5, CSS3, WordPress' 
            projectBrief='Created his web design and prior developed her site' 
            companyInfo='Terra Mota' />
        </>
    )
}