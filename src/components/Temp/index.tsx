import * as Styled from './styled';
import LogoSVG from '../../assets/LogoSVG';
import ManageUtil from '../../components/ManageUtil';

const Temp = () => {
  return (
    <Styled.Wrapper>
      <ManageUtil />
      <div>
        <LogoSVG />
        <Styled.Temp>현재 퉁이리가 열심히 개발 중이에요!</Styled.Temp>
      </div>
    </Styled.Wrapper>
  );
};

export default Temp;
