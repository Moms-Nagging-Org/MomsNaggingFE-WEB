import * as Styled from './styled';
import DashBox from '../../components/DashBox';

const DashBoard = () => {
  return (
    <Styled.Wrapper>
      <div>
        <div>1.서비스</div>
        <Styled.Wrapper>
          <DashBox />
          <DashBox />
          <DashBox />
          <DashBox />
        </Styled.Wrapper>
      </div>
    </Styled.Wrapper>
  );
};

export default DashBoard;
