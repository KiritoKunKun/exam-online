import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 76px;
  padding: 0 30px;
  align-items: center;
  background-color: ${Colors.pink};

  svg {
    width: 38px;
    height: 38px;
    color: ${Colors.white};
    cursor: pointer;
  }

  a {
    font-size: 2rem;
    line-height: 2.4rem;
    font-weight: normal;
    color: ${Colors.white};
    margin-left: 30px;
    text-decoration: none;
  }

  @media (max-width: 1200px) {
    height: 50px;
    padding: 0 16px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
