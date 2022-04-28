import SideBar from '../../components/SideBar';
import * as Styled from './styled';
import { Positioner } from '../../components/Wrapper/styled';
import Logo from '../../assets/Logo';

const Temp = () => {
  return (
    <Positioner>
      <Styled.GlobalStyle />
      <Styled.Wrapper>
        <Logo />
        <Styled.Temp>현재 퉁이리가</Styled.Temp>
        <Styled.Temp id="bottom">열심히 개발중이에요!</Styled.Temp>
      </Styled.Wrapper>
    </Positioner>
  );
};

export default Temp;
