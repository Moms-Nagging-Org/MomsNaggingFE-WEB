import * as Styled from './styled';
import {
  User,
  DashBoard,
  Habit,
  Logo,
  SideBarLogo,
  Push,
  Question,
  Withdrawal,
} from '../../assets';

const SideBar = () => {
  const menuList = [
    { name: '대시보드', option: <DashBoard /> },
    { name: '회원관리', option: <User /> },
    { name: 'PUSH알림', option: <Push /> },
    { name: '추천습관', option: <Habit /> },
    { name: '문의사항', option: <Question /> },
    { name: '탈퇴관리', option: <Withdrawal /> },
  ];
  return (
    <Styled.Wrapper>
      <SideBarLogo />
      <Styled.Side>
        {menuList.map(v => {
          return (
            <Styled.SideDetail key={v.name}>
              {v.option} <span style={{ marginLeft: '1rem' }}>{v.name}</span>
            </Styled.SideDetail>
          );
        })}
      </Styled.Side>
    </Styled.Wrapper>
  );
};

export default SideBar;
