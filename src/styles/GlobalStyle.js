import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, button, input {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    line-height: 150%;
    text-decoration: none;
    vertical-align: baseline;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    outline: none;
    list-style: none;
  }

  :root {
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secondary: #EB5757;
    --grey-100: #333333;
    --grey-75: #5B5B5B;
    --grey-50: #828282;
    --grey-35: #B1B1B1;
    --grey-20: #E0E0E0;
    --grey-0: #F5F5F5;
    --radius-5: 0.3125rem;
    --radius-8: 0.5rem;

    /* background-color: #FFFFFF;
    color: var(--grey-100); */

    color-scheme: light dark;
    background-color: var(--grey-100);
    color: #FFFFFF;
  }

    @media (prefers-color-scheme: light) {
    :root {
      background-color: #FFFFFF;
      color: var(--grey-100);
    }
  }

  body {
    width: 100%;
    height: 100%;
    min-width: 21.875rem;
    min-height: 100vh;
    overflow-x: hidden;
  }

  #root {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 1.875rem 1rem;
    gap: 1.875rem;
    overflow-x: hidden;
    margin: 0 auto;
  }

  .searchSection {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    div {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 0.625rem;

      span {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        font-size: 1.625rem;

        .inputValue {
          color: var(--grey-50);
          text-transform: capitalize
        }
      }

      .eraseSearch {
        font-weight: 500;
        font-size: 0.875rem;
      }
    }
  }

  h2, h3 {
    font-weight: 700;
  }

  @media (max-width: 500px) {
    main > section {
      gap: 1.625rem;

      .eraseSearch {
        margin: 0 auto;
      }
    }
  }


  @media (min-width: 768.1px) {
    main {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1.875rem 7%;
    gap: 3.7%;
    max-width: 47.5rem;
    }
  }

  @media (min-width: 1200px) {
    main {
      max-width: 67.5rem;
      gap: 3.27%;

      section > div {
        max-width: 38.75rem;
      }
    }
  }

  @media (min-width: 1540px) {
    main {
      max-width: 85rem;
      gap: 1.5%;

      section > div {
        max-width: 58.75rem;
      }
    }
  }

  /* @media (prefers-color-scheme: light) {
    :root {
      --grey-100: #333333;
      --grey-75: #5B5B5B;
      --grey-50: #828282;
      --grey-35: #B1B1B1;
      --grey-20: #E0E0E0;
      --grey-0: #F5F5F5;

      background-color: #FFFFFF;
      color: var(--grey-100);
    }
  } */
`;
