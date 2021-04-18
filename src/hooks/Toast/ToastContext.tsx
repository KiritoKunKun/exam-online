import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer } from '../../components/Toast/ToastContainer';

export interface ToastMessage {
  id: string;
  message: string;
}

interface ToastContextData {
  addToast(message: string): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({
  addToast: () => {},
  removeToast: () => {},
});

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = (message: string) => {
    const id = uuidv4();

    const toast = {
      id,
      message,
    };

    setMessages(state => [...state, toast]);
  };

  const removeToast = (id: string) =>
    setMessages(state => state.filter(message => message.id !== id));

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

const useToast = (): ToastContextData => useContext(ToastContext);

export { ToastProvider, useToast };
