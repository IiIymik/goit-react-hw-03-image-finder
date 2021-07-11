import React from 'react'
import {ItemList, ImgList }from './ImageGalleryItem.styled.js'

function ImageGalleryItem({ images }) {
  // const { id, webformatURL, largeImageURL } = images;
  console.log(images)
  return (
    (images.map(img => (
      <ItemList key={img.id}><ImgList src={img.webformatURL} alt={img.tags }/></ItemList>
    )))
  )
}

export default ImageGalleryItem
