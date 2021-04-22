import BookmarkIcon from '@material-ui/icons/Bookmark';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import ViewModuleSharpIcon from '@material-ui/icons/ViewModuleSharp';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Proof, Student } from '../../utils/types';
import { formatNumberToTime } from '../../utils/Utils';
import {
  Container,
  HeaderItemContainer,
  QuestionsBookmarkButton,
  QuestionsBookmarkContainer,
  QuestionsBookmarkGrid,
  QuestionsBookmarkTopContainer,
  SendExamButton,
  TimePlaceholder,
} from './ExamHeaderStyle';

interface ExamHeaderProps {
  proof: Proof;
  student: Student;
  questionIndex: number;
  onSelectQuestion: (index: number) => void;
  onToggleQuestions: (active: boolean) => void;
}

export const ExamHeader: React.FC<ExamHeaderProps> = ({
  proof,
  student,
  questionIndex,
  onSelectQuestion,
  onToggleQuestions,
}) => {
  const [showTime, setShowTime] = useState(true);
  const [showQuestions, setShowQuestions] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const history = useHistory();

  const selectQuestion = (index: number) => {
    onSelectQuestion(index);
  };

  const toggleQuestions = (active: boolean) => {
    onToggleQuestions(active);
    setShowQuestions(active);
  };

  useEffect(() => {
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth));
    return () =>
      window.removeEventListener('resize', () =>
        setScreenWidth(window.innerWidth)
      );
  }, []);

  return (
    <Container>
      <h1>
        {screenWidth < 540
          ? proof.exam.name.split(' ')[0]
          : proof.exam.description}
      </h1>

      <HeaderItemContainer>
        {showTime ? (
          <VisibilityOffIcon onClick={() => setShowTime(false)} />
        ) : (
          <VisibilityIcon onClick={() => setShowTime(true)} />
        )}
        {showTime ? (
          <h2>{formatNumberToTime(student.event.limitTime || 0)}</h2>
        ) : (
          <TimePlaceholder />
        )}
      </HeaderItemContainer>

      <HeaderItemContainer>
        <ViewModuleSharpIcon onClick={() => toggleQuestions(!showQuestions)} />
        <h2>Questões</h2>

        {showQuestions && (
          <QuestionsBookmarkContainer>
            <QuestionsBookmarkTopContainer>
              <h2>
                <b>{questionIndex + 1}</b>/45
              </h2>
              <CloseIcon onClick={() => toggleQuestions(false)} />
            </QuestionsBookmarkTopContainer>

            <QuestionsBookmarkGrid>
              {proof.questions.map((question, index) => (
                <QuestionsBookmarkButton
                  type='button'
                  key={`question-${index}`}
                  bookmarked={!!question.bookmarked}
                  selected={questionIndex === index}
                  onClick={() => selectQuestion(index)}
                >
                  {index + 1}
                  <BookmarkIcon />
                </QuestionsBookmarkButton>
              ))}
            </QuestionsBookmarkGrid>
          </QuestionsBookmarkContainer>
        )}
      </HeaderItemContainer>

      <SendExamButton type='button' onClick={() => history.push('/')}>
        <h2>Entregar prova</h2>
        <SendIcon />
      </SendExamButton>
    </Container>
  );
};
