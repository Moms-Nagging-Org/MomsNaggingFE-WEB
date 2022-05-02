import * as Styled from './styled';
import LogoSVG from '../../assets/LogoSVG';
import TabBar from '../../components/TabBar';

const PushManage = () => {
  return (
    <Styled.Wrapper>
      <TabBar />
      <div>
        <LogoSVG />
        <Styled.Temp>현재 퉁이리가 열심히 개발 중이에요!</Styled.Temp>
      </div>
    </Styled.Wrapper>
  );
};

export default PushManage;
