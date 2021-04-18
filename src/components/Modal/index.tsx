import React, { Children, isValidElement, cloneElement, useState, ReactChildren } from 'react';
import './styles.css';

import { ModalStyled } from './styles';

interface  ModalProps {
  isOpen: boolean,
  // children: ReactChildren,
  handlkeClose?: () => {},
}

const Modal: React.FC<ModalProps> = (children, {
  isOpen,
  handlkeClose,
}) => {

  return (
    <ModalStyled
      isOpen={isOpen}
      onRequestClose={handlkeClose}
      shouldCloseOnEsc
    >
      {children}
    </ModalStyled>
  );
}

export default Modal;

