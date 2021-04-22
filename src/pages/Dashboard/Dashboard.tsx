import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useEffect, useState } from 'react';
import { ExamCard } from '../../components/ExamCard/ExamCard';
import { ResultCard } from '../../components/ResultCard/ResultCard';
import { useToast } from '../../hooks/Toast/ToastContext';
import { api } from '../../services/api';
import { Proof, Student } from '../../utils/types';
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
  const [proofs, setProofs] = useState<Proof[]>([]);
  const [students, setStudents] = useState<Student[]>([]);

  const { addToast } = useToast();

  const loadProofs = async () => {
    try {
      const { data } = await api.get('/proofs');

      setProofs(data);
    } catch (error) {
      addToast('Ocorreu um erro ao carregar as provas');
    }
  };

  const loadStudents = async () => {
    try {
      const { data } = await api.get('/students');

      setStudents(data);
    } catch (error) {
      addToast('Ocorreu um erro ao carregar seus dados');
    }
  };

  useEffect(() => {
    loadProofs();
    loadStudents();
  }, []);

  return (
    <Container>
      <Title>Olá, Luiza Martins</Title>

      <GridContainer>
        <ExamsContainer>
          <Subtitle>Provas em progresso (4)</Subtitle>

          <ExamsInnerContainer>
            <ExamsGrid>
              {students.map(student => (
                <ExamCard
                  key={student.id}
                  student={student}
                  proof={
                    proofs.filter(proof => proof.id === student.event.id)[0]
                  }
                />
              ))}
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
              {/* <ExamCard />
              <ExamCard /> */}
            </ExamsGrid>
          </ExamsContainer>
        </NextExams>

        <ResultsContainer>
          <ResultsTitleContainer>
            <Subtitle>Seus resultados (6)</Subtitle>
            <a href='/resultados'>Ver todos</a>
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
