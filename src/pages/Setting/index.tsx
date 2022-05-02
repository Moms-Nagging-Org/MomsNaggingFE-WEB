import SideBar from '../../components/SideBar';
import DashBoard from '../DashBoard';
import * as Styled from './styled';
import { useRecoilState } from 'recoil';
import { selectTitleState } from '../../recoil/recoil';

import Temp from '../../components/Temp';

const Setting = () => {
  const [selectTitle, setSelectTitle] = useRecoilState(selectTitleState);
  const selectMenu: any = {
    대시보드: <DashBoard />,
    회원관리: <Temp />,
    PUSH알림: <Temp />,
    추천습관: <Temp />,
    문의사항: <Temp />,
    탈퇴관리: <Temp />,
  };
  return (
    <Styled.Wrapper>
      <SideBar selectTitle={selectTitle} setSelectTitle={setSelectTitle} />
      <div style={{ margin: '4rem' }}>
        <Styled.SelectTitle>{selectTitle}</Styled.SelectTitle>
        {selectMenu[selectTitle]}
      </div>
    </Styled.Wrapper>
  );
};

export default Setting;
