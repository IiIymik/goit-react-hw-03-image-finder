import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
      window.addEventListener('keydown',this.handleKeyDown)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown',this.handleKeyDown)
  }

  handleKeyDown = e => {
      if (e.code === 'Escape') {
        this.props.onClose();
      }
  }

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  }

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
      <ModalImg>{this.props.children}</ModalImg>
      </Overlay>,
      modalRoot);
  }
}

export default Modal


