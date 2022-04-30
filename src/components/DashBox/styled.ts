import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10vw;
  height: 10vh;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  margin: 0 1vw;
`;

export const Title = styled.div`
  font-weight: bold;
  margin-bottom: 0.8rem;
`;

export const Content = styled.div`
  text-decoration: underline;
`;
