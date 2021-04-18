import styled, { css } from 'styled-components';
import { Colors } from '../../styles/Colors';

interface ContainerProps {
  disabled?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 222px;
  height: 150px;
  padding: 7px 10px 15px 10px;
  background-color: ${Colors.white};
  border-radius: 2px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  position: relative;
  justify-content: space-between;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      filter: grayscale(1);
    `}

  mark {
    font-size: 10px;
    line-height: 16px;
    font-weight: normal;
    color: ${Colors.white};
    background-color: ${Colors.orange};
    padding: 2px 6px;
    border-radius: 2px;
    user-select: none;
  }

  h3 {
    font-size: 16px;
    line-height: 18px;
    color: ${Colors.black};
    margin-top: 10px;
    user-select: none;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 3px;
  border-radius: 2px;
  background-color: ${Colors.lightGray};

  div {
    width: 30%;
    height: 3px;
    border-radius: 2px;
    background-color: ${Colors.pink};
  }
`;

export const InformationsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 8px;

  div {
    display: flex;
    width: 100%;
    align-items: center;

    svg {
      width: 12px;
      height: 12px;
      color: ${Colors.gray};
    }

    h4 {
      font-size: 12px;
      line-height: 14px;
      font-weight: normal;
      color: ${Colors.gray};
      margin-left: 4px;
      user-select: none;
    }

    & + div {
      margin-left: auto;
    }
  }
`;

export const DateText = styled.h4`
  font-size: 10px;
  line-height: 12px;
  font-weight: 300;
  color: ${Colors.gray};
  margin-top: 16px;
  user-select: none;
`;

export const DisabledMask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  background-color: ${Colors.grayOpacity};
  top: 0;
  left: 0;
`;
