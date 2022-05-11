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

interface Props {
  selectTitle: string;
  setSelectTitle: any;
}

const SideBar = ({ selectTitle, setSelectTitle }: Props) => {
  let navigate = useNavigate();
  // const [checking, setChecking] = useState<string>(selectTitle);
  const menuList = [
    { name: '대시보드', option: <DashBoardSVG checking={selectTitle === '대시보드'} /> },
    { name: '회원관리', option: <UserSVG checking={selectTitle === '회원관리'} /> },
    { name: 'PUSH알림', option: <PushSVG checking={selectTitle === 'PUSH알림'} /> },
    { name: '추천습관', option: <HabitSVG checking={selectTitle === '추천습관'} /> },
    { name: '문의사항', option: <QuestionSVG checking={selectTitle === '문의사항'} /> },
    { name: '탈퇴관리', option: <WithdrawalSVG checking={selectTitle === '탈퇴관리'} /> },
  ];

  const clickFunc = (e: any) => {
    // setChecking(e.target.outerText);
    setSelectTitle(e.target.outerText);
  };

  return (
    <Styled.Wrapper>
      <SideBarLogoSVG />
      <Styled.Side>
        {menuList.map(v => (
          <Styled.SideDetail
            key={v.name}
            id={v.name}
            checking={selectTitle}
            onClick={e => clickFunc(e)}
          >
            {v.option} <span style={{ marginLeft: '1rem' }}>{v.name}</span>
          </Styled.SideDetail>
        ))}
      </Styled.Side>
      <Styled.SideDetail id="logout" onClick={() => navigate('/')}>
        <LogoutSVG /> <span style={{ marginLeft: '1rem' }}>로그아웃</span>
      </Styled.SideDetail>
    </Styled.Wrapper>
  );
};

export default SideBar;
