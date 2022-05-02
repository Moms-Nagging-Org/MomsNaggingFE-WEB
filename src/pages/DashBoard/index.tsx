import * as Styled from './styled';
import DashBox from '../../components/DashBox';

interface Props {
  optionTitle: string;
  index: number;
}

const DashBoard = ({ optionTitle, index }: Props) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>
        {index + 1}.{optionTitle}
      </Styled.Title>
      <Styled.Wrapper id="top">
        <DashBox index={index} />
      </Styled.Wrapper>
    </Styled.Wrapper>
  );
};

export default DashBoard;
