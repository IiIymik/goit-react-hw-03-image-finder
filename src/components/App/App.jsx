import React, { Component } from 'react';
import { Container } from './App.styled.js';
import Searchbar from 'components/Searchbar/Searchbar';
import {fetchImages} from 'services/api.js';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';

export class App extends Component {
  state = {
    searchingImages: null,
    pageNum: 1,
    images: [],
    reqStatus: 'idle',
    // idle pending resolved rejected
  };
  async componentDidUpdate(_,prevState) {
    const { searchingImages, pageNum } = this.state;
    const shouldFetch = prevState.searchingImages !== searchingImages && searchingImages !== '';
    if (shouldFetch) {
      try {
      const images = await fetchImages(searchingImages,pageNum)
      console.log(images);
        this.setState({images})
    } catch (error) {
      console.log(error)
   }
    }
  }

  handleSubmit = searchingImages => {
    this.setState({ searchingImages });
  }

  handleLoadMore = () => {
    this.setState(prevState => ({
      pageNum: prevState.pageNum + 1,
    }))
  }

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.images} />
        <Button onClick={this.handleLoadMore}/>
      </Container>
    )
  }
}

export default App

