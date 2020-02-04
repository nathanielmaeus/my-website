import { createGlobalStyle } from 'styled-components';
import { accent } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

export default createGlobalStyle`
  html, body, div, span, applet, object, iframe,
   h2, h3, h4, h5, h6, p, blockquote, pre,
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
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  h2 {
    margin: 2rem 0 1rem;
  }

  html {
    transition: 0.3s;
    background: ${({ theme }) => (theme === 'light' ? '#fff' : '#212121')};

    ${MEDIA.TABLET`
      font-size: 16px;
    `};
  }

  body {
    color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};

  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
    padding: 2px 0;
    border-bottom: 2px solid #dbf32c;
    text-decoration: none;

    &:hover {
      color: #000;
      background: #dbf32c;
      text-decoration: none;
    }
  }

  pre {
    display: block;
    padding: 2rem;
    margin-top: 4rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    color: ${accent};
    border: 1px solid #ddd;
  }

  video {
    max-width: 100%;
  }

  p {
    margin: 0.7rem 0;
  }
`;
