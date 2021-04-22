import styled, { css } from 'styled-components';
import { Colors } from '../../styles/Colors';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 222px;
  height: 103px;
  padding: 5px 15px 6px 10px;
  background-color: ${Colors.white};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

interface InnerContainerProps {
  labelColor: string;
}

export const InnerContainer = styled.div<InnerContainerProps>`
  height: 100%;

  mark {
    font-size: 10px;
    line-height: 16px;
    font-weight: normal;
    color: ${Colors.white};
    padding: 2px 6px;
    border-radius: 2px;
    user-select: none;

    ${({ labelColor }) => css`
      background-color: ${labelColor};
    `}
  }

  h3 {
    font-size: 14px;
    line-height: 17px;
    color: ${Colors.black};
    width: 107px;
    margin-top: 5px;
    user-select: none;
  }

  div {
    margin-top: 7px;

    h4 {
      font-size: 12px;
      line-height: 13px;
      font-weight: normal;
      color: ${Colors.gray};
      user-select: none;
    }

    h5 {
      font-size: 10px;
      line-height: 12px;
      font-weight: 300;
      color: ${Colors.gray};
      margin-top: 5px;
      user-select: none;
    }
  }
`;

export const ProgressBarContainer = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
`;

export const ProgressDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 6px;

  strong {
    font-size: 14px;
    line-height: 14px;
    font-weight: normal;
    color: ${Colors.gray};
    user-select: none;

    b {
      font-size: 16px;
      line-height: 14px;
      font-weight: 700;
      color: ${Colors.green};
      user-select: none;
    }
  }

  h6 {
    font-size: 10px;
    line-height: 14px;
    font-weight: normal;
    color: ${Colors.black};
    margin-top: 3px;
    user-select: none;
  }
`;
