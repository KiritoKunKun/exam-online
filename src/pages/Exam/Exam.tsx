import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderSharpIcon from '@material-ui/icons/BookmarkBorderSharp';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MoreHorizSharpIcon from '@material-ui/icons/MoreHorizSharp';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLongPress } from 'use-long-press';
import { ExamHeader } from '../../components/ExamHeader/ExamHeader';
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
  FooterButtonsContainer,
  InnerContainer,
  OptionsMask,
  ProgressBar,
  QuestionContainer,
  QuestionsMask,
} from './ExamStyle';

interface ExamLocation {
  student: Student;
  proof: Proof;
}

export const Exam = () => {
  const { state } = useLocation<ExamLocation>();

  const [student] = useState<Student>(state.student);
  const [proof, setProof] = useState<Proof>(state.proof);
  const [showQuestions, setShowQuestions] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showAnswerOptionsIndex, setShowAnswerOptionsIndex] = useState(-1);
  const [selectedAnswers, setSelectedAnswers] = useState(
    proof.questions.map(() => -1)
  );
  const [holdedAnswer, setHoldedAnswer] = useState(-1);

  const optionsIconRef = useRef<SVGSVGElement>(null);
  const optionsBoxRef = useRef<HTMLDivElement>(null);

  const { addToast } = useToast();

  const toggleBookmarkQuestion = () => {
    const newProof = proof;

    const bookmarked = !!proof.questions[questionIndex].bookmarked;
    proof.questions[questionIndex].bookmarked = !bookmarked;

    setProof({ ...newProof });

    if (!bookmarked) {
      addToast('Marcada para revisar mais tarde');
    }
  };

  const selectAnswer = (index: number) => {
    const arr = selectedAnswers;
    arr[questionIndex] = index;
    setSelectedAnswers([...selectedAnswers]);
  };

  const isAnswerSelected = (index: number) =>
    selectedAnswers[questionIndex] === index;

  const isAnswerDisabled = (index: number) =>
    !!proof.questions[questionIndex].answers[index].disabled;

  const toggleDisableAnswer = (index: number) => {
    const newProof = proof;

    newProof.questions[questionIndex].answers[
      index
    ].disabled = !isAnswerDisabled(index);

    setProof({ ...newProof });
    setShowAnswerOptionsIndex(-1);

    if (isAnswerSelected(index)) {
      selectAnswer(-1);
    }
  };

  const longPressBind = useLongPress(() => {
    setShowAnswerOptionsIndex(holdedAnswer);
  });

  useEffect(() => {
    const handleClickOutsideOptions = (event: any) => {
      if (
        !optionsIconRef.current?.contains(event.target) &&
        !optionsBoxRef.current?.contains(event.target)
      ) {
        setShowAnswerOptionsIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutsideOptions);

    return () =>
      document.removeEventListener('mousedown', handleClickOutsideOptions);
  }, [optionsIconRef]);

  return (
    <Container>
      <ExamHeader
        proof={proof}
        student={student}
        questionIndex={questionIndex}
        onSelectQuestion={setQuestionIndex}
        onToggleQuestions={setShowQuestions}
      />

      <ProgressBar percentage={45}>
        <div />
      </ProgressBar>

      <InnerContainer>
        {showQuestions && <QuestionsMask />}

        <ExamContainer>
          <BookmarkContainer>
            <h2>{questionIndex + 1}</h2>
            {proof.questions[questionIndex].bookmarked ? (
              <BookmarkIcon onClick={toggleBookmarkQuestion} />
            ) : (
              <BookmarkBorderSharpIcon onClick={toggleBookmarkQuestion} />
            )}
          </BookmarkContainer>

          <QuestionContainer>
            <img
              alt='Imagem da questão'
              src={proof.questions[questionIndex].image}
            />

            <p>{proof.questions[questionIndex].question}</p>

            <AnswersContainer>
              {proof.questions[questionIndex].answers.map((answer, index) => (
                <div key={`answer-${index}`}>
                  {showAnswerOptionsIndex === index && <OptionsMask />}
                  <AnswerContainer
                    selected={isAnswerSelected(index)}
                    disabled={isAnswerDisabled(index)}
                    highlighted={holdedAnswer === index}
                    onMouseDown={event => {
                      setHoldedAnswer(index);
                      longPressBind.onMouseDown(event);
                    }}
                    onMouseUp={longPressBind.onMouseUp}
                    onTouchStart={event => {
                      setHoldedAnswer(index);
                      longPressBind.onTouchStart(event);
                    }}
                    onTouchEnd={longPressBind.onTouchEnd}
                    onMouseLeave={() => {}}
                  >
                    <h3>{getASCIIChar(index)}</h3>
                    <input
                      type='radio'
                      name='answer'
                      id={getASCIIChar(index)}
                      value={getASCIIChar(index)}
                      checked={isAnswerSelected(index)}
                      disabled={isAnswerDisabled(index)}
                      onFocus={() => selectAnswer(index)}
                      readOnly
                    />
                    <label htmlFor={getASCIIChar(index)}>{answer.value}</label>
                    <MoreHorizSharpIcon
                      ref={optionsIconRef}
                      onClick={() => setShowAnswerOptionsIndex(index)}
                    />

                    {showAnswerOptionsIndex === index && (
                      <AnswerOptionsContainer ref={optionsBoxRef}>
                        {isAnswerSelected(index) && (
                          <div
                            onClick={() => {
                              selectAnswer(-1);
                              setShowAnswerOptionsIndex(-1);
                            }}
                          >
                            <h3>Desmarcar esta opção</h3>
                          </div>
                        )}

                        <div onClick={() => toggleDisableAnswer(index)}>
                          <h3>
                            {isAnswerDisabled(index)
                              ? 'Considerar esta opção'
                              : 'Desconsiderar esta opção'}
                          </h3>
                        </div>
                      </AnswerOptionsContainer>
                    )}
                  </AnswerContainer>
                </div>
              ))}
            </AnswersContainer>

            <FooterButtonsContainer>
              <button
                type='button'
                onClick={() =>
                  questionIndex > 0 && setQuestionIndex(questionIndex - 1)
                }
              >
                <ChevronLeftIcon />
                <h2>Anterior</h2>
              </button>

              <button
                type='button'
                onClick={() =>
                  questionIndex < proof.questions.length - 1 &&
                  setQuestionIndex(questionIndex + 1)
                }
              >
                <h2>Próximo</h2>
                <ChevronRightIcon />
              </button>
            </FooterButtonsContainer>
          </QuestionContainer>
        </ExamContainer>
      </InnerContainer>
    </Container>
  );
};
