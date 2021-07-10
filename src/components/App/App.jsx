import React, { Component } from 'react';
import { Container } from './App.styled.js';
import Searchbar from 'components/Searchbar/Searchbar';
import {fetchImages} from 'services/api.js';

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

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit}/>
      </Container>
    )
  }
}

export default App

