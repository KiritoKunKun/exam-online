import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderSharpIcon from '@material-ui/icons/BookmarkBorderSharp';
import CloseIcon from '@material-ui/icons/Close';
import MoreHorizSharpIcon from '@material-ui/icons/MoreHorizSharp';
import SendIcon from '@material-ui/icons/Send';
import ViewModuleSharpIcon from '@material-ui/icons/ViewModuleSharp';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useToast } from '../../hooks/Toast/ToastContext';
import { Proof, Student } from '../../utils/types';
import { getASCIIChar } from '../../utils/Utils';
import {
  AnswerContainer,
  AnswerOptionsContainer,
  AnswersContainer,
  BookmarkContainer,
  Container,
  ExamContainer,
  ExamHeader,
  HeaderItemContainer,
  InnerContainer,
  ProgressBar,
  QuestionContainer,
  QuestionsBookmarkContainer,
  QuestionsBookmarkTopContainer,
  QuestionsMask,
  TimePlaceholder,
} from './ExamStyle';

interface ExamLocation {
  student: Student;
  proof: Proof;
}

export const Exam = () => {
  const { state } = useLocation<ExamLocation>();

  const [showTime, setShowTime] = useState(true);
  const [showQuestions, setShowQuestions] = useState(false);
  const [questionIndex] = useState(state.student.exam.data?.answeredItems || 0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(-1);
  const [showAnswerOptionsIndex, setShowAnswerOptionsIndex] = useState(-1);
  const [bookmarked, setBookmarked] = useState(false);

  const { addToast } = useToast();

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);

    if (!bookmarked) {
      addToast('Marcada para revisar mais tarde');
    }
  };

  const formatNumberToTime = (seconds: number) =>
    new Date(seconds * 1000).toISOString().substr(11, 8);

  return (
    <Container>
      <ExamHeader>
        <h1>{state.proof.exam.description}</h1>

        <HeaderItemContainer>
          {showTime ? (
            <VisibilityOffIcon onClick={() => setShowTime(false)} />
          ) : (
            <VisibilityIcon onClick={() => setShowTime(true)} />
          )}
          {showTime ? (
            <h2>{formatNumberToTime(state.student.event.limitTime || 0)}</h2>
          ) : (
            <TimePlaceholder />
          )}
        </HeaderItemContainer>

        <HeaderItemContainer>
          <ViewModuleSharpIcon
            onClick={() => setShowQuestions(!showQuestions)}
          />
          <h2>Questões</h2>

          {showQuestions && (
            <QuestionsBookmarkContainer>
              <QuestionsBookmarkTopContainer>
                <h2>
                  <b>20</b>/45
                </h2>
                <CloseIcon />
              </QuestionsBookmarkTopContainer>
            </QuestionsBookmarkContainer>
          )}
        </HeaderItemContainer>

        <button type='button'>
          <h2>Entregar prova</h2>
          <SendIcon />
        </button>
      </ExamHeader>

      <ProgressBar percentage={45}>
        <div />
      </ProgressBar>

      <InnerContainer>
        {showQuestions && <QuestionsMask />}

        <ExamContainer>
          <BookmarkContainer>
            <h2>{questionIndex + 1}</h2>
            {bookmarked ? (
              <BookmarkIcon onClick={toggleBookmark} />
            ) : (
              <BookmarkBorderSharpIcon onClick={toggleBookmark} />
            )}
          </BookmarkContainer>

          <QuestionContainer>
            <img
              alt='Imagem da questão'
              src={state.proof.questions[questionIndex].image}
            />

            <p>{state.proof.questions[questionIndex].question}</p>

            <AnswersContainer>
              {state.proof.questions[questionIndex].answers.map(
                (answer, index) => (
                  <AnswerContainer
                    key={`answer-${index}`}
                    selected={selectedAnswerIndex === index}
                  >
                    <h3>{getASCIIChar(index)}</h3>
                    <input
                      id={getASCIIChar(index)}
                      value={getASCIIChar(index)}
                      name='answer'
                      type='radio'
                      checked={selectedAnswerIndex === index}
                      onFocus={() => setSelectedAnswerIndex(index)}
                    />
                    <label htmlFor={getASCIIChar(index)}>{answer.value}</label>
                    <MoreHorizSharpIcon
                      onClick={() => setShowAnswerOptionsIndex(index)}
                    />

                    {showAnswerOptionsIndex === index && (
                      <AnswerOptionsContainer>
                        <div onClick={() => setSelectedAnswerIndex(-1)}>
                          <h3>Desmarcar esta opção</h3>
                        </div>
                        <div>
                          <h3>Desconsiderar esta opção</h3>
                        </div>
                      </AnswerOptionsContainer>
                    )}
                  </AnswerContainer>
                )
              )}
            </AnswersContainer>
          </QuestionContainer>
        </ExamContainer>
      </InnerContainer>
    </Container>
  );
};
