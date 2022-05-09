import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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

export const Table = styled.table`
  width: 100%;
  text-align: center;
  font-size: 0.6rem;
  margin-top: 1rem;
`;

export const THead = styled.thead`
  background-color: #f6f6f6;
`;

export const THeadRow = styled.tr``;

export const TBody = styled.tbody`
  font-family: 'Pretendard-SemiBold';
`;

export const HabitName = styled.td`
  width: 25%;
  padding: 1rem 0;
`;
export const Friendly = styled.td`
  width: 25%;
  padding: 1rem 0;
`;
export const Cool = styled.td`
  width: 25%;
  padding: 1rem 0;
`;
export const Angry = styled.td`
  width: 25%;
  padding: 1rem 0;
`;
