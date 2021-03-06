import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 182px);
  overflow: hidden;

  @media (max-width: 1200px) {
    transform: translate(-50%, 100px);
  }
`;
