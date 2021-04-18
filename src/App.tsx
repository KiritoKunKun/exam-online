import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/Header';
import AppProvider from './hooks';
import Routes from './routes';
import { GlobalStyle } from './styles/GlobalStyle';

export const App = () => (
  <BrowserRouter>
    <AppProvider>
      <Header />

      <Routes />

      <GlobalStyle />
    </AppProvider>
  </BrowserRouter>
);
