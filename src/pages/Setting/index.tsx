import SideBar from '../../components/SideBar';
import DashBoard from '../DashBoard';
import * as Styled from './styled';

const Setting = () => {
  return (
    <Styled.Wrapper>
      <SideBar />
      <div>
        <Styled.SelectTitle>대시보드</Styled.SelectTitle>
        <DashBoard />
      </div>
    </Styled.Wrapper>
  );
};

export default Setting;
