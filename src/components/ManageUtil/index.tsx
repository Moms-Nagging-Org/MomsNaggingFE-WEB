import { Input } from 'antd';
import * as Styled from './styled';

const { Search } = Input;

const onSearch = (value: string) => console.log(value);
const ManageUtil = () => {
  return (
    <Styled.Wrapper id="top">
      <Styled.Wrapper>
        <Styled.Wrapper id="content" onClick={() => alert('개발중입니다!')}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 8.5V14.5C10 15.0304 10.2107 15.5391 10.5858 15.9142C10.9609 16.2893 11.4696 16.5 12 16.5C12.5304 16.5 13.0391 16.2893 13.4142 15.9142C13.7893 15.5391 14 15.0304 14 14.5V6.5C14 5.43913 13.5786 4.42172 12.8284 3.67157C12.0783 2.92143 11.0609 2.5 10 2.5C8.93913 2.5 7.92172 2.92143 7.17157 3.67157C6.42143 4.42172 6 5.43913 6 6.5V15.5C6 17.0913 6.63214 18.6174 7.75736 19.7426C8.88258 20.8679 10.4087 21.5 12 21.5V21.5C13.5913 21.5 15.1174 20.8679 16.2426 19.7426C17.3679 18.6174 18 17.0913 18 15.5V6.5"
              stroke="#0F977F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          엑셀 파일(.xlsx)로 다운받기
        </Styled.Wrapper>
        <Styled.Wrapper id="content" onClick={() => alert('개발중입니다!')}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.3001 22H7.90009C6.90009 22 6.00009 21.2 5.90009 20.2L4.1001 5H20.1001L18.3001 20.2C18.1001 21.2 17.3001 22 16.3001 22Z"
              stroke="#F93232"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 5H22"
              stroke="#F93232"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 9V18"
              stroke="#F93232"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 9V18"
              stroke="#F93232"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 9V18"
              stroke="#F93232"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 5L9 2H15L17 5"
              stroke="#F93232"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          삭제하기
        </Styled.Wrapper>
      </Styled.Wrapper>
      <Styled.Wrapper>
        <Search
          placeholder="검색어를 입력해주세요"
          allowClear
          enterButton={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="#F43E51"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.9999 21L16.6499 16.65"
                stroke="#F43E51"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          size="large"
          onSearch={onSearch}
        />
      </Styled.Wrapper>
    </Styled.Wrapper>
  );
};

export default ManageUtil;
