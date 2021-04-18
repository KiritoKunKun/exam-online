import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import React, { useEffect, useState } from 'react';
import { ToastMessage, useToast } from '../../hooks/Toast/ToastContext';
import { Container } from './ToastStyle';

interface ToastProps {
  message: ToastMessage;
}

const TOAST_DURATION = 4000;
const TRANSITION_DURATION = 600;

export const Toast: React.FC<ToastProps> = ({ message }) => {
  const [opacity, setOpacity] = useState(0);

  const { removeToast } = useToast();

  useEffect(() => {
    setOpacity(1);

    const timer = setTimeout(() => {
      removeToast(message.id);
    }, TOAST_DURATION);

    setTimeout(() => setOpacity(0), TOAST_DURATION - TRANSITION_DURATION);

    return () => {
      setOpacity(0);

      setTimeout(() => {
        clearTimeout(timer);
      }, TRANSITION_DURATION);
    };
  }, [removeToast, message.id]);

  return (
    <Container opacity={opacity} transitionDuration={TRANSITION_DURATION}>
      <h1>{message.message}</h1>
      <CloseSharpIcon
        onClick={() => {
          setOpacity(0);
          setTimeout(() => removeToast(message.id), TRANSITION_DURATION);
        }}
      />
    </Container>
  );
};
