import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import {
  UserSVG,
  DashBoardSVG,
  HabitSVG,
  SideBarLogoSVG,
  PushSVG,
  QuestionSVG,
  WithdrawalSVG,
  LogoutSVG,
} from '../../assets';

const SideBar = () => {
  let navigate = useNavigate();
  const [checking, setChecking] = useState<string>('대시보드');
  const menuList = [
    { name: '대시보드', option: <DashBoardSVG /> },
    { name: '회원관리', option: <UserSVG /> },
    { name: 'PUSH알림', option: <PushSVG /> },
    { name: '추천습관', option: <HabitSVG /> },
    { name: '문의사항', option: <QuestionSVG /> },
    { name: '탈퇴관리', option: <WithdrawalSVG /> },
  ];

  const clickFunc = (e: any) => {
    setChecking(e.target.outerText);
  };

  return (
    <Styled.Wrapper>
      <SideBarLogoSVG />
      <Styled.Side>
        {menuList.map(v => {
          return (
            <Styled.SideDetail
              key={v.name}
              id={v.name}
              checking={checking}
              onClick={e => clickFunc(e)}
            >
              {v.option} <span style={{ marginLeft: '1rem' }}>{v.name}</span>
            </Styled.SideDetail>
          );
        })}
      </Styled.Side>
      <Styled.SideDetail id="logout" onClick={() => navigate('/')}>
        <LogoutSVG /> <span style={{ marginLeft: '1rem' }}>로그아웃</span>
      </Styled.SideDetail>
    </Styled.Wrapper>
  );
};

export default SideBar;
