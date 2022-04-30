import SideBar from '../../components/SideBar';
import * as Styled from './styled';
import DashBoard from '../DashBoard';
import LogoSVG from '../../assets/LogoSVG';

const Temp = () => {
  return (
    <Styled.Wrapper>
      <SideBar />
      <div>
        <Styled.SelectTitle>대시보드</Styled.SelectTitle>
        <DashBoard optionTitle="1.서비스" />
        <DashBoard optionTitle="2.IOS" />
        <DashBoard optionTitle="3.AOS" />
        <DashBoard optionTitle="4.상장" />

        <LogoSVG />
        <Styled.Temp>현재 퉁이리가 열심히 개발 중이에요!</Styled.Temp>
      </div>
    </Styled.Wrapper>
  );
};

export default Temp;
