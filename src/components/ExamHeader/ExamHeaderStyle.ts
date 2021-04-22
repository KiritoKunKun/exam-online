import styled, { css } from 'styled-components';
import { Colors } from '../../styles/Colors';

export const Container = styled.div`
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

  @media (max-width: 1200px) {
    height: 42px;
    padding: 0 16px;
  }
`;

export const HeaderItemContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  svg {
    width: 24px;
    height: 24px;
    color: ${Colors.pink};
    cursor: pointer;
  }

  h2 {
    font-size: 16px;
    line-height: 14px;
    font-weight: normal;
    color: ${Colors.gray};
    margin-left: 15px;
  }

  @media (max-width: 1200px) {
    position: static;

    h2 {
      font-size: 14px;
      margin-left: 5px;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const TimePlaceholder = styled.div`
  background-color: ${Colors.basicWhite};
  width: 62px;
  height: 14px;
  margin-left: 15px;

  @media (max-width: 1200px) {
    width: 44px;
  }
`;

export const QuestionsBookmarkContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 284px;
  padding: 12px;
  background-color: ${Colors.white};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;
  left: 50%;
  top: 100%;
  transform: translate(-50%, 37px);

  @media (max-width: 1200px) {
    left: 50%;
    top: 0;
    transform: translate(-50%, 99px);
  }
`;

export const QuestionsBookmarkTopContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  align-items: center;
  justify-content: space-between;

  h2 {
    width: 100%;
    text-align: center;
    font-size: 16px;
    line-height: 14px;
    font-weight: normal;
    color: ${Colors.lightGray};

    b {
      color: ${Colors.black};
      font-weight: 700;
    }
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${Colors.lightGray};
    cursor: pointer;
  }
`;

export const QuestionsBookmarkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, min-content);
  grid-gap: 10px;
  margin: 20px auto 0 auto;
`;

interface QuestionsBookmarkButtonProps {
  bookmarked: boolean;
  selected: boolean;
}

export const QuestionsBookmarkButton = styled.button<QuestionsBookmarkButtonProps>`
  width: 34px;
  height: 34px;
  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
  color: ${Colors.black};
  background-color: ${Colors.white};
  border: 1px solid ${Colors.gray};
  border-radius: 50%;
  position: relative;
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    css`
      color: ${Colors.white};
      background-color: ${Colors.pink};
      border: none;
    `}

  svg {
    display: none;
    width: 14px;
    height: 14px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ${({ bookmarked, selected }) =>
    bookmarked &&
    !selected &&
    css`
      svg {
        display: inline;
      }
    `}
`;

export const SendExamButton = styled.button`
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

  @media (max-width: 1200px) {
    width: 20px;
    height: 20px;
    border: none;

    h2 {
      display: none;
    }

    svg {
      margin-left: 0;
    }
  }
`;
