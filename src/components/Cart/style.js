import styled from 'styled-components';

export const StyledCart = styled.aside`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  .cartHeader {
    width: 100%;
    height: 4.0625rem;
    background-color: var(--color-primary);
    color: #ffffff;
    border-radius: var(--radius-5) var(--radius-5) 0 0;
    font-size: 1.125rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cartSection {
    background-color: var(--grey-0);
    border-radius: 0 0 var(--radius-5) var(--radius-5);
    width: 100%;

    ul {
      width: 100%;
      padding: 1.25rem 1.1563rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.3125rem;

      li {
        width: 100%;
        height: 5rem;
        display: flex;
        gap: 0.625rem;

        figure {
          height: 5rem;
          width: 5rem;
          background-color: var(--grey-20);
          border-radius: var(--radius-5);
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 5rem;
            object-fit: cover;
            object-position: center;
          }

          .imageMedium {
            height: 6rem;
            margin-bottom: 0.5rem;
          }

          .imageBig {
            height: 9.75rem;
            margin-bottom: 2.5rem;
          }
        }

        div {
          width: calc(100% - 5rem);
          display: flex;
          flex-direction: column;
          justify-content: flex-start;

          span {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 0.5rem;

            h3 {
              color: var(--grey-100);
            }

            button {
              padding: 0;
              background-color: inherit;
              border: none;
              color: #bdbdbd;
              font-size: 0.75rem;
              font-weight: 500;

              :hover {
                text-decoration: underline;
              }
            }

            small {
              font-size: 0.75rem;
              color: var(--grey-50);
            }

            div {
              width: fit-content;
              display: flex;
              flex-direction: row;
              gap: 0.25rem;
              color: var(--grey-50);
              font-weight: 500;

              p {
                width: 1.375rem;
                text-align: center;
                color: var(--color-primary);
              }

              button {
                width: 0.75rem;
                font-size: 1.125rem;
                color: var(--grey-50);

                :hover {
                  font-weight: 600;
                  text-decoration: none;
                }
              }
            }
          }
        }
      }
    }
    .cartTotal {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1.25rem 1.1563rem;
      border-top: 2px solid var(--grey-20);

      span {
        width: 100%;
        display: flex;
        justify-content: space-between;

        h3 {
          font-weight: 600;
        }

        .totalValue {
          color: var(--grey-50);
        }
      }

      button {
        height: 3.75rem;
        background-color: var(--grey-20);
        border: solid 1px var(--grey-20);
        color: var(--grey-50);

        :hover {
          background-color: var(--grey-50);
          border: solid 2px var(--grey-50);
          color: var(--grey-20);
        }

        :active {
          opacity: 50%;
        }
      }
    }
  }

  .emptyCart {
    width: 100%;
    height: 9.875rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
    background-color: var(--grey-0);
    border-radius: 0 0 var(--radius-5) var(--radius-5);

    h2 {
      font-size: 1.125rem;
    }

    small {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 375px) {
    .cartList {
      padding: 1rem 0.875rem;
    }

    h3 {
      font-size: 0.875rem;
      font-weight: 600;
    }
  }

  @media (min-width: 768.1px) {
    width: 20rem;

    .emptyCart {
      min-width: 20rem;
    }

    .cartList {
      max-height: 20.125rem;
      overflow-y: auto;
      padding: 1.25rem 0.625rem;
    }
  }

  @media (min-width: 900px) {
    width: 22.8125rem;

    .emptyCart {
      min-width: 22.8125rem;
    }
  }
`;
