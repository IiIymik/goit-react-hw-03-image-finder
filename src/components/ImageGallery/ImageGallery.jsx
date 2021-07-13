import React from 'react'
import { ImageList } from './ImageGallery.styled.js';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';


function ImageGallery({ images, onClick}) {
  const handleImageCard = (e) => onClick(e.target.src);
  return (
    <ImageList onClick={handleImageCard}>
      <ImageGalleryItem images={images}/>
   </ImageList>
  )
}

export default ImageGallery
