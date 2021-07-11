import React from 'react'
import { ImageList } from './ImageGallery.styled.js';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';


function ImageGallery({ images }) {
  return (
    <ImageList>
      <ImageGalleryItem images={images}/>
   </ImageList>
  )
}

export default ImageGallery
