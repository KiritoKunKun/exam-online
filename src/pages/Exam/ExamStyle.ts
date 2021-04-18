import styled, { css } from 'styled-components';
import { Colors } from '../../styles/Colors';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ExamHeader = styled.div`
  display: flex;
  width: 100%;
  height: 76px;
  padding: 0 35px;
  align-items: center;
  justify-content: space-between;
  background-color: ${Colors.white};

  h1 {
    font-size: 2rem;
    line-height: 2.8rem;
    font-weight: 700;
    color: ${Colors.gray};
  }

  div {
    display: flex;
    align-items: center;

    svg {
      width: 2.4rem;
      height: 2.4rem;
      color: ${Colors.pink};
    }

    h2 {
      font-size: 1.6rem;
      line-height: 14px;
      font-weight: normal;
      color: ${Colors.gray};
      margin-left: 15px;
    }
  }

  button {
    display: flex;
    align-items: center;
    width: 172px;
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${Colors.pink};
    border-radius: 2px;
    background-color: ${Colors.white};
    cursor: pointer;

    h2 {
      font-size: 14px;
      line-height: 16px;
      font-weight: 700;
      color: ${Colors.pink};
      margin-left: auto;
      user-select: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${Colors.pink};
      margin-left: 10px;
    }
  }
`;

interface ProgressBarProps {
  percentage: number;
}

export const ProgressBar = styled.div<ProgressBarProps>`
  width: 100%;
  height: 5px;
  border-radius: 2px;
  background-color: ${Colors.gray};

  div {
    height: 5px;
    border-radius: 2px;
    background-color: ${Colors.pink};

    ${({ percentage }) =>
      css`
        width: ${percentage}%;
      `}
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px 34px 35px 34px;
`;

export const ExamContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px 30px 29px 30px;
  background-color: ${Colors.white};
`;

export const BookmarkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h2 {
    font-size: 16px;
    line-height: 24px;
    font-weight: normal;
    color: ${Colors.gray};
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${Colors.pink};
    cursor: pointer;
  }
`;

export const QuestionContainer = styled.div`
  width: 556px;
  height: 100%;
  margin: 11px auto 0 auto;

  img {
    width: 100%;
    height: 320px;
    user-select: none;
  }

  p {
    font-size: 14px;
    line-height: 18px;
    font-weight: 300;
    color: ${Colors.black};
    margin: 17px 0 9px 0;
  }
`;

export const AnswerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 54px;
  padding: 0 9px 0 6px;

  h3 {
    font-size: 14px;
    line-height: 18px;
    font-weight: normal;
    color: ${Colors.black};
    user-select: none;
  }

  input[type='radio'] {
    width: 15px;
    height: 15px;
    color: ${Colors.black};
    border: 2px solid ${Colors.black};
    border-radius: 50%;
    margin-left: 7px;
    appearance: none;
    -webkit-appearance: none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    :before {
      content: '';
      position: absolute;
      width: 7.5px;
      height: 7.5px;
      background-color: ${Colors.black};
      border-radius: 50%;
      opacity: 0;
    }

    :checked:before {
      opacity: 1;
    }
  }

  label {
    font-size: 14px;
    line-height: 18px;
    font-weight: normal;
    color: ${Colors.black};
    padding-left: 7px;
    cursor: pointer;
    user-select: none;
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${Colors.pink};
    margin-left: auto;
    cursor: pointer;
  }
`;
