import React, { Component } from 'react';
import { Container, LargeImg, SpinLoad} from './App.styled.js';
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
    largeImg: '',
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

  handleOnImage = (url) => {
    const { images } = this.state;
    images.map( img  => {
      if (img.webformatURL.includes(url)) {
        this.setState({largeImg: img.largeImageURL})
      }
    })
      this.toggleShowModal();
  }

  toggleShowModal = () => {
    this.setState(({ showModal}) => ({
      showModal: !showModal,
    }))
  }

  render() {
    const { reqStatus, showModal, largeImg} = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.images} onClick={this.handleOnImage} />
        {reqStatus === 'pending' && <SpinLoad><SpinLoader/></SpinLoad>}
        {reqStatus === 'resolved' && <SpinLoad> <Button onClick={this.handleLoadMore}/></SpinLoad>}
        {showModal && <Modal onClose={this.toggleShowModal}><LargeImg src={largeImg} /></Modal>}
      </Container>
    )
  }
}

export default App

