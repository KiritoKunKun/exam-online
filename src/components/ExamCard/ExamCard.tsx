import ViewModuleSharpIcon from '@material-ui/icons/ViewModuleSharp';
import WatchLaterSharp from '@material-ui/icons/WatchLaterSharp';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Proof, Student } from '../../utils/types';
import {
  Container,
  DateText,
  DisabledMask,
  InformationsContainer,
  ProgressBar,
} from './ExamCardStyle';

interface ExamCardProps {
  student: Student;
  proof: Proof;
}

export const ExamCard: React.FC<ExamCardProps> = ({ student, proof }) => {
  const history = useHistory();

  const disabled = !proof.id; // TODO

  const title =
    student.exam.type === 'EXAM'
      ? 'Avaliação trimestral 20.3'
      : `Simulado Enem ${new Date(student.event.date).getFullYear()}`;

  return (
    <Container disabled={disabled} onClick={() => history.push('/prova')}>
      <div>
        <mark>{title}</mark>
        <h3>{student.exam.description}</h3>
      </div>

      <div>
        {!disabled && (
          <ProgressBar>
            <div />
          </ProgressBar>
        )}

        <InformationsContainer>
          <div>
            <WatchLaterSharp />
            <h4>00:20:45</h4>
          </div>

          <div>
            <ViewModuleSharpIcon />
            <h4>{`${student.exam.data?.answeredItems}/${student.exam.data?.itemsTotal} questões`}</h4>
          </div>
        </InformationsContainer>

        <DateText>De 20/12/20 à 20/01/21</DateText>
      </div>

      {disabled && <DisabledMask />}
    </Container>
  );
};
