import * as Styled from './styled';
import { ExcelSVG, DeleteSVG, SearchSVG } from '../../assets';

const ManageUtil = () => {
  return (
    <Styled.Wrapper id="top">
      <Styled.Wrapper>
        <Styled.Wrapper id="content" onClick={() => alert('개발중입니다!')}>
          <ExcelSVG />
          엑셀 파일(.xlsx)로 다운받기
        </Styled.Wrapper>
        <Styled.Wrapper id="content" onClick={() => alert('개발중입니다!')}>
          <DeleteSVG />
          삭제하기
        </Styled.Wrapper>
      </Styled.Wrapper>
      <Styled.Wrapper>
        <Styled.Input placeholder="검색어를 입력해주세요" />
        <div onClick={() => alert('개발중입니다!')}>
          <SearchSVG />
        </div>
      </Styled.Wrapper>
    </Styled.Wrapper>
  );
};

export default ManageUtil;
