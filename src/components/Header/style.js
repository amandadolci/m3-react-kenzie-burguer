import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  padding: 0.875rem 1rem;
  padding-top: 1.4375rem;
  /* background-color: var(--grey-0); */
  background-color: var(--grey-50);

  @media (prefers-color-scheme: light) {
    background-color: var(--grey-0);
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
    margin: 0 auto;
  }

  @media (min-width: 768.1px) {
    padding: 0.625rem 7%;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 0;
      max-width: 47.5rem;
    }
  }

  @media (min-width: 1200px) {
    div {
      max-width: 67.5rem;
    }
  }

  @media (min-width: 1540px) {
    div {
      max-width: 85rem;
    }
  }
`;
