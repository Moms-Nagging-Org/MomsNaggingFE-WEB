import SideBar from '../../components/SideBar';
import DashBoard from '../DashBoard';
import * as Styled from './styled';

const Setting = () => {
  const dashMenu = ['서비스', 'IOS', 'AOS', '상장'];
  return (
    <Styled.Wrapper>
      <SideBar />
      <div>
        <Styled.SelectTitle>대시보드</Styled.SelectTitle>
        {dashMenu.map((v, i) => (
          <DashBoard index={i} key={v.toString()} optionTitle={v} />
        ))}
      </div>
    </Styled.Wrapper>
  );
};

export default Setting;
