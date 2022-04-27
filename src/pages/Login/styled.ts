import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F43E51;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 1rem;
  padding: 10px 40px 10px 14px;
  width: 100%;
  margin-bottom: 1vh;
  opacity: 0.8;
  font-family: 'Pretendard-Medium';
  &#top {
    margin-top: 2rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button<{ background: string }>`
  margin: 0;
  padding: 0 1rem;
  padding-top: 1rem;
  margin: 8px 0;
  border: none;
  padding-bottom: 1rem;
  width: 100%;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 12px;
  background: ${props => props.background};
  font-family: 'Pretendard-Regular';
  cursor: pointer;
  user-select: none;
  transition: 0.3s all;
  &:disabled {
    opacity: 0.5;
    cursor: auto;
  }
`;
