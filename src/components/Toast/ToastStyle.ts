import styled, { css } from 'styled-components';
import { Colors } from '../../styles/Colors';

interface ContainerProps {
  opacity: number;
  transitionDuration: number;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 285px;
  height: 44px;
  padding: 0 16px;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
  background-color: ${Colors.pink};
  opacity: 0;

  ${({ opacity, transitionDuration }) => css`
    opacity: ${opacity};
    transition-duration: ${transitionDuration}ms;
  `}

  h1 {
    font-size: 14px;
    line-height: 24px;
    font-weight: normal;
    color: ${Colors.white};
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${Colors.white};
    cursor: pointer;
  }
`;
