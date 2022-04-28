import SideBar from '../../components/SideBar';
import * as Styled from './styled';
import { Positioner } from '../../components/Wrapper/styled';
import LogoSVG from '../../assets/LogoSVG';

const Temp = () => {
  return (
    <Styled.Wrapper>
      <SideBar />
      <Styled.Wrapper>
        <LogoSVG />
        <Styled.Temp>현재 퉁이리가 열심히 개발 중이에요!</Styled.Temp>
      </Styled.Wrapper>
    </Styled.Wrapper>
  );
};

export default Temp;
