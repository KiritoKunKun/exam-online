import ViewModuleSharpIcon from '@material-ui/icons/ViewModuleSharp';
import WatchLaterSharp from '@material-ui/icons/WatchLaterSharp';
import {
  Container,
  Date,
  DisabledMask,
  InformationsContainer,
  ProgressBar,
} from './ExamCardStyle';

export const ExamCard = () => {
  const disabled = false;

  return (
    <Container disabled={disabled}>
      <div>
        <mark>Simulado Enem 2021</mark>
        <h3>Linguagens e Códigos</h3>
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
            <h4>00:20:45</h4>
          </div>
        </InformationsContainer>

        <Date>De 20/12/20 à 20/01/21</Date>
      </div>

      {disabled && <DisabledMask />}
    </Container>
  );
};
