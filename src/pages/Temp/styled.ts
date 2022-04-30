import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Temp = styled.div`
  font-family: 'Pretendard-Medium';
  margin: 1.5rem 0;
  color: black;
  font-weight: bold;

  &#bottom {
    margin: 0;
  }
`;

export const SelectTitle = styled.div`
  display: flex;
  margin: 4rem;
  flex-direction: column;
  font-size: 1.5rem;
  font-weight: bold;
  color: #f43e51;
`;
