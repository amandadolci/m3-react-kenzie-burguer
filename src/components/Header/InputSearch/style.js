import styled from 'styled-components';

export const StyledInput = styled.form`
  min-width: 16.875rem;
  max-width: 22.8125rem;
  height: 3.75rem;
  padding: 0.625rem;
  padding-left: 0.9375rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border: 2px solid var(--grey-20);
  /* background-color: var(--grey-75);
  border: 2px solid var(--grey-100); */
  border-radius: var(--radius-8);
  box-sizing: border-box;

  /* @media (prefers-color-scheme: light) {
    background-color: #ffffff;
    border: 2px solid var(--grey-20);

      --grey-100: #333333;
      --grey-75: #5B5B5B;
      --grey-50: #828282;
      --grey-35: #B1B1B1;
      --grey-20: #E0E0E0;
      --grey-0: #F5F5F5;

    input {
      ::placeholder {
        color: var(--grey-20);
      }
    }

    :focus-within {
      border: 2px solid var(--grey-100);
      color: var(--grey-50);

      input {
        ::placeholder {
          color: var(--grey-50);
        }
      }
    }
  } */

  input {
    /*  */
    background-color: inherit;
    width: calc(100% - 7.5rem);

    ::placeholder {
      color: var(--grey-20);
      /* color: var(--grey-100); */
    }
  }

  :focus-within {
    border: 2px solid var(--grey-100);
    color: var(--grey-50);
    /* border: 2px solid var(--grey-20);
    color: var(--grey-0); */

    input {
      ::placeholder {
        color: var(--grey-50);
        /* color: var(--grey-0); */
      }
    }
  }

  @media (min-width: 768.1px) {
    width: 20rem;
  }

  @media (min-width: 900px) {
    width: 22.8125rem;
  }
`;
