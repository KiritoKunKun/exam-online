import { CircularProgressbar } from 'react-circular-progressbar';
import { Colors } from '../../styles/Colors';
import {
  Container,
  InnerContainer,
  ProgressBarContainer,
  ProgressDataContainer,
} from './ResultCardStyle';

export const ResultCard = () => {
  const percentage = (36 / 45) * 100;

  return (
    <Container>
      <InnerContainer>
        <mark>Simulado Enem 2020</mark>
        <h3>Linguagens e Códigos</h3>

        <div>
          <h4>Realizada em 31min</h4>
          <h5>Entregue em 12/12/20</h5>
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
            <b>36</b>/45
          </strong>

          <h6>{`${percentage}%`}</h6>
        </ProgressDataContainer>
      </ProgressBarContainer>
    </Container>
  );
};
