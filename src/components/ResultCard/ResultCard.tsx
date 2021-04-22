import { formatToDate } from 'brazilian-values';
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { Colors } from '../../styles/Colors';
import { Result } from '../../utils/types';
import {
  Container,
  InnerContainer,
  ProgressBarContainer,
  ProgressDataContainer,
} from './ResultCardStyle';

interface ResultCardProps {
  result: Result;
}

export const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  const percentage = Math.floor(
    (result.rightQuestions / result.totalQuestions) * 100
  );

  return (
    <Container>
      <InnerContainer labelColor={result.color}>
        <mark>{result.label}</mark>
        <h3>{result.title}</h3>

        <div>
          <h4>{`Realizada em ${result.time / 60}min`}</h4>
          <h5>{`Entregue em ${formatToDate(result.deliveryDate)}`}</h5>
        </div>
      </InnerContainer>

      <ProgressBarContainer>
        <CircularProgressbar
          value={percentage}
          styles={{
            trail: {
              stroke: Colors.lightGray,
              strokeWidth: '3px',
            },
            path: {
              stroke: Colors.green,
              strokeWidth: '3px',
            },
          }}
        />

        <ProgressDataContainer>
          <strong>
            <b>{result.rightQuestions}</b>/{result.totalQuestions}
          </strong>

          <h6>{`${percentage}%`}</h6>
        </ProgressDataContainer>
      </ProgressBarContainer>
    </Container>
  );
};
