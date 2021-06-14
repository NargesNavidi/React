import React from 'react';
import '../../App.css';
import Brief from '../Brief';
import Gallery from '../Gallery';

export default function TerraMota() {
    const images = [
        {
            original: 'react2/images/TerraMota/Terra1.png',
            thumbnail: 'react2/images/TerraMota/Terra1Thumb.png',
        },
        {
            original: 'react2/images/TerraMota/Terra2.png',
            thumbnail: 'react2/images/TerraMota/Terra2Thumb.png',
        },
        {
            original: 'react2/images/TerraMota/Terra3.png',
            thumbnail: 'react2/images/TerraMota/Terra3Thumb.png',
        },
        {
            original: 'react2/images/TerraMota/Terra4.png',
            thumbnail: 'react2/images/TerraMota/Terra4Thumb.png',
        },
        {
            original: 'react2/images/TerraMota/Terra5.png',
            thumbnail: 'react2/images/TerraMota/Terra5Thumb.png',
        },
        {
            original: 'react2/images/TerraMota/Terra6.png',
            thumbnail: 'react2/images/TerraMota/Terra6Thumb.png',
        },
        {
            original: 'react2/images/TerraMota/Terra7.png',
            thumbnail: 'react2/images/TerraMota/Terra7Thumb.png',
        },
        {
            original: 'react2/images/TerraMota/Terra8.png',
            thumbnail: 'react2/images/TerraMota/Terra8Thumb.png',
        },
        {
            original: 'react2/images/TerraMota/Terra9.png',
            thumbnail: 'react2/images/TerraMota/Terra9Thumb.png',
        },
        {
            original: 'react2/images/TerraMota/Terra10.png',
            thumbnail: 'react2/images/TerraMota/Terra10Thumb.png',
        },
        {
            original: 'react2/images/TerraMota/Terra11.png',
            thumbnail: 'react2/images/TerraMota/Terra11Thumb.png',
        },
        {
            original: 'react2/images/TerraMota/Terra12.png',
            thumbnail: 'react2/images/TerraMota/Terra12Thumb.png',
        },
        {
            original: 'react2/images/TerraMota/Terra13.png',
            thumbnail: 'react2/images/TerraMota/Terra13Thumb.png',
        },
        {
            original: 'react2/images/TerraMota/Terra14.png',
            thumbnail: 'react2/images/TerraMota/Terra14Thumb.png',
        },
        {
            original: 'react2/images/TerraMota/Terra15.png',
            thumbnail: 'react2/images/TerraMota/Terra15Thumb.png',
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