import { useEffect } from 'react';
import SideBar from '../../components/SideBar';
import {
  DashBoard,
  UserManage,
  PushManage,
  HabitManage,
  QuestionManage,
  WithdrawalManage,
} from '../';
import * as Styled from './styled';
import { useRecoilState } from 'recoil';
import { selectTitleState } from '../../recoil/recoil';

const Setting = () => {
  const [selectTitle, setSelectTitle] = useRecoilState(selectTitleState);

  // key 값은 영어로 하면 좋을 것 같습니다.
  const selectMenu: any = {
    대시보드: <DashBoard />,
    회원관리: <UserManage />,
    PUSH알림: <PushManage />,
    추천습관: <HabitManage />,
    문의사항: <QuestionManage />,
    탈퇴관리: <WithdrawalManage />,
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
