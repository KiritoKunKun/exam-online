import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { ExamCard } from '../../components/ExamCard/ExamCard';
import {
  ArrowContainer,
  Container,
  ExamsContainer,
  ExamsInnerContainer,
  GridContainer,
  NextExams,
  ResultsContainer,
  Subtitle,
  Title,
} from './DashboardStyle';

export const Dashboard = () => {
  return (
    <Container>
      <Title>Olá, Luiza Martins</Title>

      <GridContainer>
        <ExamsContainer>
          <Subtitle>Provas em progresso (4)</Subtitle>

          <ExamsInnerContainer>
            <ExamCard />
            <ExamCard />
            <ExamCard />

            <ArrowContainer>
              <ArrowForwardIosIcon />
            </ArrowContainer>
          </ExamsInnerContainer>
        </ExamsContainer>

        <NextExams>
          <ExamsContainer>
            <Subtitle>Próximas provas (2)</Subtitle>

            <ExamsInnerContainer>
              <ExamCard />
              <ExamCard />
            </ExamsInnerContainer>
          </ExamsContainer>
        </NextExams>

        <ResultsContainer>
          <div>
            <Subtitle>Seus resultados (6)</Subtitle>
            <a href='/results'>Ver todos</a>
          </div>
        </ResultsContainer>
      </GridContainer>
    </Container>
  );
};
