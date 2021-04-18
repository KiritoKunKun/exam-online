import Menu from '@material-ui/icons/Menu';
import { Container } from './HeaderStyle';

export const Header = () => {
  return (
    <Container>
      <Menu />
      <a href='/'>SOMOS</a>
    </Container>
  );
};
