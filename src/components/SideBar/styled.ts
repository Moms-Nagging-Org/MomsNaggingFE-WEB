import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #f43e51;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;
`;

export const Side = styled.div`
  margin-top: 4rem;
  width: 70%;
  height: 78vh;
`;

export const SideDetail = styled.div<{ checking?: string }>`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 1vh;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  padding: 0.5rem;

  &#logout {
    width: 70%;
    margin-bottom: 5vh;
  }

  &#${({ checking }) => checking} {
    font-weight: bold;
    background-color: white;
    color: #f43e51;
  }
`;
