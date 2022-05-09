import * as Styled from './styled';
import ManageUtil from '../../components/ManageUtil';

const WithdrawalManage = () => {
  return (
    <Styled.Wrapper>
      <ManageUtil />
      <Styled.Table>
        <Styled.THead>
          <Styled.THeadRow>
            <Styled.Sequence>순서</Styled.Sequence>
            <Styled.OutDate>탈퇴 일자</Styled.OutDate>
            <Styled.ID>아이디</Styled.ID>
            <Styled.OutReason>탈퇴 사유</Styled.OutReason>
            <Styled.Etc>기타</Styled.Etc>
          </Styled.THeadRow>
        </Styled.THead>
      </Styled.Table>
    </Styled.Wrapper>
  );
};

export default WithdrawalManage;
