import BookmarkIcon from '@material-ui/icons/Bookmark';
import MoreHorizSharpIcon from '@material-ui/icons/MoreHorizSharp';
import SendIcon from '@material-ui/icons/Send';
import ViewModuleSharpIcon from '@material-ui/icons/ViewModuleSharp';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import {
  AnswerContainer,
  BookmarkContainer,
  Container,
  ExamContainer,
  ExamHeader,
  InnerContainer,
  ProgressBar,
  QuestionContainer,
} from './ExamStyle';

export const Exam = () => {
  return (
    <Container>
      <ExamHeader>
        <h1>Linguagens e Códigos</h1>

        <div>
          <VisibilityOffIcon />
          <h2>00:30:45</h2>
        </div>

        <div>
          <ViewModuleSharpIcon />
          <h2>Questões</h2>
        </div>

        <button type='button'>
          <h2>Entregar prova</h2>
          <SendIcon />
        </button>
      </ExamHeader>

      <ProgressBar percentage={45}>
        <div />
      </ProgressBar>

      <InnerContainer>
        <ExamContainer>
          <BookmarkContainer>
            <h2>1</h2>
            <BookmarkIcon />
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

            <AnswerContainer>
              <h3>A</h3>
              <input type='radio' />
              <h3>
                um impedimento às transações comerciais em contexto
                internacional.
              </h3>
              <MoreHorizSharpIcon />
            </AnswerContainer>
          </QuestionContainer>
        </ExamContainer>
      </InnerContainer>
    </Container>
  );
};
