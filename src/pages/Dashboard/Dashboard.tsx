import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { ExamCard } from '../../components/ExamCard/ExamCard';
import { ResultCard } from '../../components/ResultCard/ResultCard';
import {
  ArrowContainer,
  Container,
  ExamsContainer,
  ExamsGrid,
  ExamsInnerContainer,
  GridContainer,
  NextExams,
  ResultsContainer,
  ResultsGrid,
  ResultsTitleContainer,
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
            <ExamsGrid>
              <ExamCard />
              <ExamCard />
              <ExamCard />
              <ExamCard />
            </ExamsGrid>

            <ArrowContainer>
              <ArrowForwardIosIcon />
            </ArrowContainer>
          </ExamsInnerContainer>
        </ExamsContainer>

        <NextExams>
          <ExamsContainer>
            <Subtitle>Próximas provas (2)</Subtitle>

            <ExamsGrid>
              <ExamCard />
              <ExamCard />
            </ExamsGrid>
          </ExamsContainer>
        </NextExams>

        <ResultsContainer>
          <ResultsTitleContainer>
            <Subtitle>Seus resultados (6)</Subtitle>
            <a href='/results'>Ver todos</a>
          </ResultsTitleContainer>

          <ResultsGrid>
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
          </ResultsGrid>
        </ResultsContainer>
      </GridContainer>
    </Container>
  );
};
