import styled, { css } from 'styled-components';
import { Colors } from '../../styles/Colors';

export const Container = styled.div`
  width: 100%;
  height: 100%;
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
  position: relative;
`;

export const QuestionsMask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${Colors.darkGrayOpacity};
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

export const AnswersContainer = styled.div`
  width: 100%;
`;

interface AnswerContainerProps {
  selected: boolean;
  disabled: boolean;
}

export const AnswerContainer = styled.div<AnswerContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 54px;
  padding: 0 9px 0 6px;
  position: relative;

  ${({ selected }) =>
    selected &&
    css`
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    `}

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

  ${({ disabled }) =>
    disabled &&
    css`
      h3 {
        color: ${Colors.gray};
      }

      input[type='radio'] {
        color: ${Colors.gray};
        border-color: ${Colors.gray};
      }

      label {
        color: ${Colors.gray};
        text-decoration: line-through solid ${Colors.gray};
      }
    `}
`;

export const AnswerOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.white};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translate(3px, -50%);

  div {
    display: flex;
    align-items: center;
    width: 190px;
    height: 44px;
    padding: 0 12px;
    cursor: pointer;

    :hover {
      background-color: ${Colors.grayOpacity};
    }

    h3 {
      font-size: 14px;
      line-height: 14px;
      font-weight: normal;
      color: ${Colors.gray};
      user-select: none;
    }

    & + div {
      border-top: 0.5px solid ${Colors.gray};
    }
  }
`;

export const FooterButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 61px;

  button {
    display: flex;
    width: 112px;
    height: 32px;
    align-items: center;
    border: 1px solid ${Colors.pink};
    border-radius: 2px;
    cursor: pointer;

    svg {
      width: 24px;
      height: 24px;
      color: ${Colors.pink};
    }

    h2 {
      font-size: 14px;
      line-height: 16px;
      font-weight: normal;
      color: ${Colors.pink};
      margin-left: 8px;
      user-select: none;
    }

    & + button {
      margin-left: 20px;
      border: none;
      background-color: ${Colors.pink};

      h2 {
        color: ${Colors.white};
        margin: 0 8px 0 auto;
      }

      svg {
        color: ${Colors.white};
      }
    }
  }
`;
