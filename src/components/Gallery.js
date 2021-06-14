import React from 'react';
import ImageGallery from 'react-image-gallery';
import './Brief.css';


function Gallery(props) {

        return <ImageGallery items={props.images} />;

}

export default Gallery;
