import SideBar from '../../components/SideBar';
import DashBoard from '../DashBoard';
import * as Styled from './styled';

const Setting = () => {
  return (
    <Styled.Wrapper>
      <SideBar />
      <div>
        <Styled.SelectTitle>대시보드</Styled.SelectTitle>
        <DashBoard optionTitle="1.서비스" />
        <DashBoard optionTitle="2.IOS" />
        <DashBoard optionTitle="3.AOS" />
        <DashBoard optionTitle="4.상장" />
      </div>
    </Styled.Wrapper>
  );
};

export default Setting;
