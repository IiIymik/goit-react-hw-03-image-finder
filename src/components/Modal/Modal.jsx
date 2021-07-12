import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  render() {
    return createPortal(
      <Overlay>
      <ModalImg>{this.props.children}</ModalImg>
      </Overlay>,
      modalRoot);
  }
}

export default Modal


