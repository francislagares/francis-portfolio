import { css } from 'styled-components';

export const Locomotive = css`
  /*! locomotive-scroll v4.0.6 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */
  html.has-scroll-smooth {
    overflow: hidden;
  }

  html.has-scroll-dragging {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .has-scroll-smooth body {
    overflow: hidden;
  }

  .has-scroll-smooth [data-scroll-container] {
    min-height: 100vh;
  }

  [data-scroll-direction='horizontal'] [data-scroll-container] {
    white-space: nowrap;
    height: 100vh;
    display: inline-block;
  }

  [data-scroll-direction='horizontal'] [data-scroll-section] {
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
    height: 100%;
  }

  @media screen and (prefers-reduced-motion: reduce) {
    .c-scrollbar {
      top: 0;
      right: 0;
      width: 11px;
      height: 100%;
      position: absolute;
      transform-origin: center right;
      transition: none;
      opacity: 0;
    }
  }

  .c-scrollbar {
    top: 0;
    right: 0;
    width: 11px;
    height: 100%;
    position: absolute;
    transform-origin: center right;
    transition: transform 0.3s, opacity 0.3s;
    opacity: 0;
  }

  .c-scrollbar:hover,
  .c-scrollbar:focus {
    transform: scaleX(1.45);
  }

  .c-scrollbar:hover,
  .has-scroll-scrolling .c-scrollbar,
  .has-scroll-dragging .c-scrollbar {
    opacity: 1;
  }

  [data-scroll-direction='horizontal'] .c-scrollbar {
    top: auto;
    bottom: 0;
    width: 100%;
    height: 10px;
    transform: scaleY(1);
  }

  [data-scroll-direction='horizontal'] .c-scrollbar:hover,
  [data-scroll-direction='horizontal'] .c-scrollbar:focus {
    transform: scaleY(1.3);
  }

  .c-scrollbar_thumb {
    top: 0;
    right: 0;
    width: 7px;
    margin: 2px;
    border-radius: 10px;
    position: absolute;
    background-color: black;
    opacity: 0.5;
    cursor: -webkit-grab;
    cursor: grab;
  }

  .has-scroll-dragging .c-scrollbar_thumb {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }

  [data-scroll-direction='horizontal'] .c-scrollbar_thumb {
    bottom: 0;
    right: auto;
  }
`;
