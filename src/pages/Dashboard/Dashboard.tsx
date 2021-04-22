import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useEffect, useState } from 'react';
import { ExamCard } from '../../components/ExamCard/ExamCard';
import { ResultCard } from '../../components/ResultCard/ResultCard';
import { useToast } from '../../hooks/Toast/ToastContext';
import { api } from '../../services/api';
import { Colors } from '../../styles/Colors';
import { Proof, Result, Student } from '../../utils/types';
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

const results: Result[] = [
  {
    color: Colors.darkOrange,
    label: 'Simulado Enem 2020',
    title: 'Linguagens e Códigos',
    deliveryDate: new Date(2020, 12, 12),
    time: 1860,
    rightQuestions: 36,
    totalQuestions: 45,
  },
  {
    color: Colors.blue,
    label: 'Avaliação trimestral 20.3',
    title: 'Biologia',
    deliveryDate: new Date(2020, 11, 27),
    time: 1800,
    rightQuestions: 3,
    totalQuestions: 10,
  },
  {
    color: Colors.blue,
    label: 'Avaliação trimestral 20.3',
    title: 'Química',
    deliveryDate: new Date(2020, 11, 27),
    time: 2400,
    rightQuestions: 5,
    totalQuestions: 10,
  },
  {
    color: Colors.purple,
    label: 'Simulado Enem 2019',
    title: 'Ciências Humanas',
    deliveryDate: new Date(2019, 12, 19),
    time: 2580,
    rightQuestions: 31,
    totalQuestions: 45,
  },
];

export const Dashboard = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [proofsInProgress, setProofsInProgress] = useState<Proof[]>([]);
  const [nextProofs, setNextProofs] = useState<Proof[]>([]);

  const { addToast } = useToast();

  const loadProofs = async () => {
    try {
      const { data } = await api.get('/proofs');

      setProofsInProgress([data[0], data[1], data[2]]);
      setNextProofs([data[3], data[4]]);
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
          <Subtitle>{`Provas em progresso (${proofsInProgress.length})`}</Subtitle>

          <ExamsInnerContainer>
            <ExamsGrid>
              {!!students.length &&
                proofsInProgress.map(proof => (
                  <ExamCard
                    key={proof.id}
                    student={
                      students.filter(
                        student => student.event.id === proof.id
                      )[0]
                    }
                    proof={proof}
                    showProgressBar
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
            <Subtitle>{`Próximas provas (${nextProofs.length})`}</Subtitle>

            <ExamsInnerContainer>
              <ExamsGrid>
                {!!students.length &&
                  nextProofs.map(proof => (
                    <ExamCard
                      key={proof.id}
                      student={
                        students.filter(
                          student => student.event.id === proof.id
                        )[0]
                      }
                      proof={proof}
                      showProgressBar={false}
                    />
                  ))}
              </ExamsGrid>

              <ArrowContainer>
                <ArrowForwardIosIcon />
              </ArrowContainer>
            </ExamsInnerContainer>
          </ExamsContainer>
        </NextExams>

        <ResultsContainer>
          <ResultsTitleContainer>
            <Subtitle>{`Seus resultados (${results.length})`}</Subtitle>
            <a href='/resultados'>Ver todos</a>
          </ResultsTitleContainer>

          <ResultsGrid>
            {results.map((result, index) => (
              <ResultCard key={`result-${index}`} result={result} />
            ))}
          </ResultsGrid>
        </ResultsContainer>
      </GridContainer>
    </Container>
  );
};
