import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 38px 34px;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  line-height: 2.2rem;
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
  grid-gap: 20px;
  margin: 20px 0 98px 0;
`;

export const NextExams = styled.div`
  grid-row: 2;
`;

export const ExamsContainer = styled.div`
  background-color: ${Colors.white};
  padding: 20px 18px 45px 24px;
  border-radius: 2px;
  overflow: hidden;
`;

export const ExamsInnerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, min-content);
  grid-gap: 20px;
  margin-top: 26px;
  overflow: hidden;
  align-items: center;
`;

export const ArrowContainer = styled.div`
  display: flex;
  width: 76px;
  height: 76px;
  margin-left: 40px;
  align-items: center;
  justify-content: center;

  svg {
    width: 38px;
    height: 38px;
    color: ${Colors.extraLightGray};
  }
`;

export const ResultsContainer = styled.div`
  width: 268px;
  height: 100%;
  background-color: ${Colors.white};
  border-radius: 2px;
  grid-column: 1 2;
  padding: 20px;
  align-items: center;

  > div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    a {
      font-size: 12px;
      line-height: 22px;
      color: ${Colors.pink};
    }
  }
`;
