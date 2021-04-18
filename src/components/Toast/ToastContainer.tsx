import React from 'react';
import { ToastMessage } from '../../hooks/Toast/ToastContext';
import { Toast } from './Toast';
import { Container } from './ToastContainerStyle';

interface ToastContainerProps {
  messages: ToastMessage[];
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => (
  <Container>
    {messages.map((message: ToastMessage) => (
      <Toast key={message.id} message={message} />
    ))}
  </Container>
);
