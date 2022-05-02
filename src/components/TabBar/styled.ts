import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  /* margin-right: 1rem; */

  &#top {
    width: 1200px;
    justify-content: space-between;
  }

  &#content {
    cursor: pointer;
    gap: 3px;
  }

  &#content:hover {
    text-decoration: underline;
  }
`;

export const MenuTitle = styled.li<{ check: string }>`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-align: center;
  display: flex;
  color: lightgray;
  padding: 0.5rem 2rem;
  border-bottom: 4px solid lightgray;
  &:hover {
    cursor: pointer;
  }
  &#${({ check }) => check} {
    font-weight: bold;
    color: black;
    border-bottom: 4px solid #f43e51;
  }
`;
