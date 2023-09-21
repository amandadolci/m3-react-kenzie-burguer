import styled from 'styled-components';

export const StyledSection = styled.section``;

export const StyledList = styled.ul`
  width: 110%;
  height: 380px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.25rem;
  padding: 0 1rem;
  overflow-x: auto;
  overflow-y: hidden;

  @media (min-width: 768.1px) {
    width: fit-content;
    max-width: 58.75rem;
    height: fit-content;
    padding: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    display: grid;
    grid-template-columns: 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1540px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
