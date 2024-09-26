import theme from './theme'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    overflow-x: hidden;
  }

  body {
    color: ${theme.body.color};
    background-color: ${theme.body.backgroundColor};
    font-size: ${theme.body.size};
    line-height:  ${theme.body.lineHeight};
    font-weight: ${theme.body.weight};
  }

  button {

  }

  h1 {
    font-size: ${theme.headings.h1.size};
    text-transform: ${theme.headings.h1.textTransform};
    font-weight: ${theme.headings.h1.weight};
    color: ${theme.headings.h1.color};
    line-height: ${theme.headings.h1.lineHeight};
  }

  h2 {
    font-size: ${theme.headings.h2.size};
    text-transform: ${theme.headings.h2.textTransform};
    font-weight: ${theme.headings.h2.weight};
    color: ${theme.headings.h1.color};
    line-height: ${theme.headings.h2.lineHeight};
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  h3 {
    font-size: ${theme.headings.h3.size};
    text-transform: ${theme.headings.h3.textTransform};
    font-weight: ${theme.headings.h3.weight};
    color: ${theme.headings.h1.color};
  }

  h4 {
    font-size: ${theme.headings.h4.size};
    text-transform: ${theme.headings.h4.textTransform};
    font-weight: ${theme.headings.h4.weight};
    color: ${theme.headings.h1.color};
  }

  h5 {
    font-size: ${theme.headings.h5.size};
    text-transform: ${theme.headings.h5.textTransform};
    font-weight: ${theme.headings.h5.weight};
    color: ${theme.headings.h1.color};
  }

  h6 {
    font-size: ${theme.headings.h6.size};
    text-transform: ${theme.headings.h6.textTransform};
    font-weight: ${theme.headings.h6.weight};
    color: ${theme.headings.h1.color};
  }


  input {
    font-size: ${theme.bodyTextSize};
  }

  .desktop-hide {
    @media screen and (min-width: ${theme.breakpoints.lg}px) {
      display: none!important;
    }
  }

  .medium-hide {
    @media screen and (min-width: ${theme.breakpoints.md}px) {
      display: none!important;
    }
  }

  .mobile-hide {
    @media screen and (max-width: calc(${theme.breakpoints.lg}px - 1px)) {
      display: none!important;
    }
  }

  .medium-show {
    @media screen and (max-width: calc(${theme.breakpoints.md}px - 1px)) {
        display: none!important;
      }
  
  }

  .mobile-show {
    @media screen and (min-width: calc(${theme.breakpoints.md}px - 1px)) {
        display: none!important;
      }
  
  }

  .p-0 {
    padding: 0;
  }

  .pl-1 {
    padding-left: 1rem;
  }

  .pr-1 {
    padding-right: 1rem;
  }

  .pt-1 {
    padding-top: 1rem;
  }

  .pb-1 {
    padding-bottom: 1rem;
  }

  .fa-2x {
    font-size: 1.5em;
  }

  .d-none {
    display: none!important;
  }

  .v-none {
    height: 0;
    visibility: hidden;
    width: 0;
  }

  .sr-only {
    height:1px;
    left:-10000px;
    overflow:hidden;
    position:absolute;
    top:auto;
    width:1px;
  }

  /****** Colours *******/
  .success {
    color: ${theme.colors.success};
  }

  .danger {
    color: ${theme.colors.danger};
  }

  .country-flag {
    display: block;
    float: left;
    height: 1.5rem;
    width: 1.5rem;    
  }

  form {
    text-align: left;
  }

  /*************** Icons *****************/
  .svg-inline--fa {
    height: 1rem;
    width: 1rem;
    color: ${theme.colors.black};

    @media screen and (min-width: ${theme.breakpoints.sm}px) {
      height: 1.25rem;
      width: 1.25rem;
    }

    @media screen and (min-width: ${theme.breakpoints.md}px) {
      height: 1.5rem;
      width: 1.5rem;
    }
  }


  #category-side-menu.visible > #category-side-menu-menu {
    display:flex;
  }

  #category-side-menu.visible > #category-side-menu-overlay {
    display:block;
  }

  body.locked{
    overflow: hidden !important;
    width: 100vw !important;
    position: fixed !important;
  }

  .desktop-show {
    @media screen and (max-width: ${theme.breakpoints.lg}px) {
      display: none!important;
    }
  }

  .medium-show {
    @media screen and (max-width: ${theme.breakpoints.md}px) {
      display: none!important;
    }
  }

  .brand {
    font-weight: ${theme.fonts.default.bold};
  }
`

export default GlobalStyles;
