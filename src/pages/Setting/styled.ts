import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F43E51;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Temp = styled.div`
  font-family: 'Pretendard-Medium';
  font-size: 2rem;
  margin: 1.5rem 0;
  color: white;
  opacity: 0.7;

  &#bottom {
    margin: 0;
  }
`;
