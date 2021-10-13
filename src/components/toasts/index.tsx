import React from 'react';
import { useTransition } from 'react-spring';
import { ToastMessage } from '../../hooks/toast';
import { ToastType } from './ToastType';
import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

export const Toast: React.FC<ToastContainerProps> = ({ messages }) => {
  const messageWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Container>
      {messageWithTransitions.map(({ item, key, props }) => (
        <ToastType key={key} message={item} style={props} />
      ))}
    </Container>
  );
};
