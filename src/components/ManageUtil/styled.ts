import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;

  &#top {
    justify-content: space-between;
  }

  &#content {
    cursor: pointer;
  }

  &#content:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  border: none;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 0.5rem;
  font-family: 'Noto Sans KR', sans-serif;
  margin-right: 10px;
`;
