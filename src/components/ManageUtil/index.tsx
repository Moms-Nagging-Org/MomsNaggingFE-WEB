import DeleteSVG from '@/assets/DeleteSVG';
import ExcelSVG from '@/assets/ExcelSVG';
import SearchSVG from '@/assets/SearchSVG';
import * as Styled from './styled';
import { Input } from 'antd';

const { Search } = Input;

const onSearch = (value: string) => console.log(value);
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
        <Search
          placeholder="검색어를 입력해주세요"
          allowClear
          enterButton={<SearchSVG />}
          size="large"
          onSearch={onSearch}
        />
      </Styled.Wrapper>
    </Styled.Wrapper>
  );
};

export default ManageUtil;
