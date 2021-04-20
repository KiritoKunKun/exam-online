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

const ANSWERS = [
  'um impedimento às transações comerciais em contexto internacional.',
  'o desinteresse dos funcionários nos cursos oferecidos pelas empresas.',
  'a necessidade de inserção de funcionários nativos no mercado de trabalho globalizado.',
  'um contraste entre o ideal e o real sobre a comunicação em inglês no mundo empresarial.',
];

export const Exam = () => {
  const { state } = useLocation<ExamLocation>();

  const [showTime, setShowTime] = useState(true);
  const [showQuestions, setShowQuestions] = useState(false);
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
            <h2>1</h2>
            {bookmarked ? (
              <BookmarkIcon onClick={toggleBookmark} />
            ) : (
              <BookmarkBorderSharpIcon onClick={toggleBookmark} />
            )}
          </BookmarkContainer>

          <QuestionContainer>
            <img
              alt='Imagem da questão'
              src='https://s3-alpha-sig.figma.com/img/db97/9808/8028ff5718d7d120477560c330a5e21d?Expires=1619395200&Signature=XPu8TZitHZe3FIV3TwPX50y8teJt5ZgFtwk7PgsEpVT0dswP7piX-EFuO2g9rhSd3eXF4OUg84m917j~bTPbX3e7ctkIDoe8P-kGksCbq2YRQs0dbyDkkNEMWP4jCRID5I~HsugPJZnPpjbJSQrbamSnAn2HrsPzJsQeGpTX4xETUghdfhAz2vgdjf-MirybncqFnAgsyMWi5KDxEgdyTWeTMiD7-FagsMMLcWGj34tCxxTS3mUGvSSAOEULg---0HDszXIrvUF7ULUtW8KfJeAchvNtj7Vy-abYk7x7VUKJ3UPGQVEDy9IzVLfa-9EiBe9PpfsSOzTKyPvos0ya4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
            />

            <p>
              O infográfico aborda a importância do inglês para os negócios.
              Nesse texto, as expressões but e yet only evidenciam
            </p>

            <AnswersContainer>
              {ANSWERS.map((answer, index) => (
                <AnswerContainer selected={selectedAnswerIndex === index}>
                  <h3>A</h3>
                  <input
                    id='A'
                    type='radio'
                    name='answer'
                    value='A'
                    onSelect={() => setSelectedAnswerIndex(index)}
                  />
                  <label htmlFor='A'>{answer}</label>
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
              ))}
            </AnswersContainer>
          </QuestionContainer>
        </ExamContainer>
      </InnerContainer>
    </Container>
  );
};
