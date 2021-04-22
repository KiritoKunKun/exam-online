import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 38px 34px;

  @media (max-width: 1200px) {
    padding: 15px 0 0 20px;
  }
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  line-height: 22px;
  font-weight: normal;
  color: ${Colors.darkGray};
`;

export const Subtitle = styled.h2`
  font-size: 14px;
  line-height: 22px;
  color: ${Colors.darkGray};
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto 268px;
  grid-template-rows: 263px 263px;
  grid-gap: 20px;
  margin: 20px 0 98px 0;

  @media (max-width: 1200px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, 200px);
    grid-gap: 10px;
    margin: 15px 0 36px 0;
  }
`;

export const NextExams = styled.div`
  grid-row: 2;
`;

export const ExamsContainer = styled.div`
  padding: 20px 114px 45px 24px;
  border-radius: 2px;
  background-color: ${Colors.white};

  @media (max-width: 1200px) {
    padding: 0;
    background-color: transparent;
  }
`;

export const ExamsInnerContainer = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
`;

export const ExamsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 222px);
  grid-gap: 20px;
  height: 150px;
  margin-top: 26px;
  align-items: center;

  @media (max-width: 1200px) {
    grid-auto-flow: column;
    grid-gap: 15px;
    height: min-content;
    margin: 10px 0 0 -5px;
    padding: 5px;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const ArrowContainer = styled.div`
  display: flex;
  width: 76px;
  height: 76px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-100%, -50%);
  margin-left: 96px;

  svg {
    width: 38px;
    height: 38px;
    color: ${Colors.extraLightGray};
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const ResultsContainer = styled.div`
  width: 268px;
  height: 546px;
  border-radius: 2px;
  grid-column: 1 2;
  padding: 20px;
  align-items: center;
  background-color: ${Colors.white};

  @media (max-width: 1200px) {
    width: fit-content;
    max-width: 100%;
    height: fit-content;
    padding: 0;
    background-color: transparent;
  }
`;

export const ResultsTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-size: 12px;
    line-height: 22px;
    color: ${Colors.pink};

    @media (max-width: 1200px) {
      display: none;
    }
  }
`;

export const ResultsGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 20px;
  margin-top: 12px;

  @media (max-width: 1200px) {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    margin: 10px 0 0 -5px;
    padding: 5px;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
