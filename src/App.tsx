import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { GlobalStyle } from './styles/GlobalStyle';

export const App = () => (
  <BrowserRouter>
    {/* <Header /> */}

    <Routes />

    {/* <Footer /> */}

    <GlobalStyle />
  </BrowserRouter>
);
