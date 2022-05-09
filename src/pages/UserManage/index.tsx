import * as Styled from './styled';
import ManageUtil from '../../components/ManageUtil';

const UserManage = () => {
  return (
    <Styled.Wrapper>
      <ManageUtil />
      <Styled.Table>
        <Styled.THead>
          <Styled.THeadRow>
            <Styled.Sequence>순서</Styled.Sequence>
            <Styled.JoinDate>가입 일자</Styled.JoinDate>
            <Styled.Device>기기</Styled.Device>
            <Styled.LoginKind>로그인</Styled.LoginKind>
            <Styled.ID>아이디</Styled.ID>
            <Styled.Title>호칭</Styled.Title>
            <Styled.NaggingRobber>잔소리 강도</Styled.NaggingRobber>
          </Styled.THeadRow>
        </Styled.THead>
      </Styled.Table>
    </Styled.Wrapper>
  );
};

export default UserManage;
