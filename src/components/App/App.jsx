import React, { Component } from 'react';
import { Container } from './App.styled.js';
import Searchbar from 'components/Searchbar/Searchbar';
import {fetchImages} from 'services/api.js';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import SpinLoader from 'components/Loader/SpinLoader';
import Modal from 'components/Modal/Modal.jsx';

export class App extends Component {
  state = {
    searchingImages: null,
    pageNum: 1,
    images: [],
    reqStatus: 'idle',
    showModal: false,
    // idle pending resolved rejected
  };
  async componentDidUpdate(_,prevState) {
    const { searchingImages, pageNum } = this.state;
    const shouldFetch = prevState.searchingImages !== searchingImages || prevState.pageNum !== pageNum;
    if (shouldFetch) {
      if (searchingImages === '') {
        return
      }
      try {
        this.setState({ reqStatus: 'pending' });
        const images = await fetchImages(searchingImages, pageNum)
        this.setState({images, reqStatus:'resolved'})
      } catch (error) {
        this.setState({reqStatus:'rejected'})
      console.log(error)
   }
    }
  }

  handleSubmit = searchingImages => {
    this.setState({ searchingImages, pageNum: 1});
  }

  handleLoadMore = () => {
    this.setState(prevState => ({
      pageNum: prevState.pageNum + 1,
    }))
  }

  handleOnImage = ({images}) => {
console.log(images)
  }

  render() {
    const { reqStatus, showModal, images } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        {reqStatus === 'pending' && <SpinLoader/>}
        <ImageGallery images={this.state.images} />
        {showModal && <Modal>Hello</Modal>}
        {reqStatus === 'resolved' && <Button onClick={this.handleLoadMore}/>}
      </Container>
    )
  }
}

export default App

