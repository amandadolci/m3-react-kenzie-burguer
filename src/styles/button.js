import { createGlobalStyle } from 'styled-components';

export const GlobalButton = createGlobalStyle`
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-primary);
    border: solid 2px var(--color-primary);
    border-radius: var(--radius-8);
    color: #ffffff;
    font-weight: 600;
    padding: 0.7188rem 1.25rem;
    line-height: 100%;
    cursor: pointer;

    :hover {
      background-color: var(--color-primary-50);
      border: solid 2px var(--color-primary-50);
    }

    :active {
      opacity: 50%;
    }
  }
`;
