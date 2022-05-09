import * as Styled from './styled';
import ManageUtil from '../../components/ManageUtil';

const QuestionManage = () => {
  return (
    <Styled.Wrapper>
      <ManageUtil />
      <Styled.Table>
        <Styled.THead>
          <Styled.THeadRow>
            <Styled.Sequence>순서</Styled.Sequence>
            <Styled.QuestionDate>문의 일자</Styled.QuestionDate>
            <Styled.ID>아이디</Styled.ID>
            <Styled.QuestionTitle>문의 제목</Styled.QuestionTitle>
            <Styled.QuestionContent>문의 내용</Styled.QuestionContent>
          </Styled.THeadRow>
        </Styled.THead>
      </Styled.Table>
    </Styled.Wrapper>
  );
};

export default QuestionManage;
