import * as Styled from './styled';
import DashBox from '../../components/DashBox';

interface Props {
  optionTitle: string;
}

const DashBoard = ({ optionTitle }: Props) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>{optionTitle}</Styled.Title>
      <Styled.Wrapper id="top">
        <DashBox />
        <DashBox />
        <DashBox />
        <DashBox />
      </Styled.Wrapper>
    </Styled.Wrapper>
  );
};

export default DashBoard;
