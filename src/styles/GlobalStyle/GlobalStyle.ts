import type { FlattenSimpleInterpolation } from 'styled-components'
import { createGlobalStyle, css } from 'styled-components'

import type { GlobalStyleProps } from './GlobalStyle.types'

const GlobalStyle = createGlobalStyle(
  (props: GlobalStyleProps): FlattenSimpleInterpolation => css`
    @font-face {
      font-family: 'everettlight';
      src: url('/assets/fonts/everett-light-webfont.woff2') format('woff2'), url('/assets/fonts/everett-light-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'everettmedium';
      src: url('/assets/fonts/everett-medium-webfont.woff2') format('woff2'),
        url('/assets/fonts/everett-medium-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'everettregular';
      src: url('/assets/fonts/everett-regular-webfont.woff2') format('woff2'),
        url('/assets/fonts/everett-regular-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }

    #___gatsby {
      height: 100%;
      display: flex;
    }

    #gatsby-focus-wrapper {
      display: flex;
      width: 100%;
    }

    html,
    body {
      height: fit-content;
    }

    body {
      font-size: ${props.theme.typography.paragraph[2].fontSize};
      line-height: ${props.theme.typography.paragraph[2].lineHeight};
      font-family: ${props.theme.typography.fontFamily};
      color: ${props.theme.colours.black};
      background: ${props.theme.colours.white};
      -webkit-font-smoothing: antialiased !important;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    ol,
    ul {
      list-style: none;
    }

    img {
      border: none;
      max-width: 100%;
      height: auto;
    }

    blockquote,
    q {
      quotes: none;

      &::before,
      &::after {
        content: '';
        content: none;
      }
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: normal;
      font-style: normal;
    }

    .modal-enter {
      opacity: 0;
      transform: scale(1.1);
    }

    .modal-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: opacity 300ms, transform 300ms;
    }

    .modal-exit {
      opacity: 0;
    }

    .modal-exit-active {
      opacity: 0;
      transform: scale(1.1);
      transition: opacity 300ms, transform 300ms;
    }

    .mobile-nav-enter {
      opacity: 0;
      transform: translateX(-100%);
      transition: opacity 400ms, transform 400ms;
    }

    .mobile-nav-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: opacity 400ms, transform 400ms;
    }

    .mobile-nav-exit {
      opacity: 0;
    }

    .mobile-nav-exit-active {
      opacity: 0;
      transform: translateX(-100%);
      transition: opacity 400ms, transform 400ms;
    }

    .slide-down-enter {
      opacity: 0;
      height: 0;
      overflow: hidden;
    }

    .slide-down-enter-active {
      opacity: 1;
      height: auto;
      transition: opacity 300ms, transform 300ms;
    }

    .slide-down-exit {
      opacity: 0;
      height: 0;
    }

    .slide-down-exit-active {
      opacity: 0;
      transform: scale(1.1);
      transition: opacity 300ms, transform 300ms;
    }

    .loader-enter {
      opacity: 0;
      transform: scale(1.1);
    }

    .loader-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: opacity 300ms, transform 300ms;
    }

    .loader-exit {
      opacity: 1;
    }

    .loader-exit-active {
      opacity: 0;
      transform: scale(1.1);
      transition: opacity 300ms, transform 300ms;
    }

    .slick-track {
      margin-left: 0;
    }
  `,
)

export default GlobalStyle
