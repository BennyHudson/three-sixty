import { createGlobalStyle, css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'

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

    .slick-list,
    .slick-slider,
    .slick-track {
      position: relative;
      display: block;
    }

    .slick-loading .slick-slide,
    .slick-loading .slick-track {
      visibility: hidden;
    }

    .slick-slider {
      box-sizing: border-box;
      user-select: none;
      touch-action: pan-y;
    }

    .slick-list {
      overflow: hidden;
      margin: 0;
      padding: 0;

      &:focus {
        outline: 0;
      }

      &.dragging {
        cursor: pointer;
        cursor: hand;
      }
    }

    .slick-slider {
      .slick-list,
      .slick-track {
        transform: translate3d(0, 0, 0);
      }
    }

    .slick-track {
      top: 0;
      left: 0;

      &::after,
      &::before {
        display: table;
        content: '';
      }

      &::after {
        clear: both;
      }
    }

    .slick-slide {
      display: none;
      float: left;
      height: 100%;
      min-height: 1px;

      img {
        display: block;
      }

      &.slick-loading {
        img {
          display: none;
        }
      }

      &.dragging {
        img {
          pointer-events: none;
        }
      }
    }

    .slick-initialized {
      .slick-slide {
        display: block;
      }
    }

    .slick-arrow {
      .slick-hidden {
        display: none;
      }
    }
  `,
)

export default GlobalStyle
