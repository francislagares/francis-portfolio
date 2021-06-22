import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavStyles = styled.div`
  .logo,
  .works,
  .about {
    position: fixed;
    z-index: 20;
  }

  .logo {
    top: 2vw;
    left: 2vw;
    width: 3.2vw;
    height: 3.2vw;
    mix-blend-mode: normal;

    @media (hover: none) and (pointer: coarse), (max-width: 500px) {
      width: 7vw;
      height: 7vw;
    }

    svg {
      width: 100%;
      height: 100%;
      pointer-events: none;
      color: var(--burlywood);
    }
  }

  @media screen and (prefers-reduced-motion: reduce) {
    .works,
    .about {
      right: -3vw;
      color: var(--burlywood);
      font-size: calc(var(--VW) * 1.2);
      transition: none;
      transform: rotate(90deg);
      transform-origin: 0% 0%;

      @media (hover: none) and (pointer: coarse), (max-width: 500px) {
        right: -12vw;
        font-size: calc(var(--VW) * 3);
      }

      :hover,
      :focus {
        -webkit-text-stroke: 0.1vw var(--burlywood);
      }
    }
  }

  @media screen and (prefers-reduced-motion: reduce) {
    .works,
    .about {
      right: -3vw;
      color: var(--burlywood);
      font-size: calc(var(--VW) * 1.2);
      transition: none;
      transform: rotate(90deg);
      transform-origin: 0% 0%;

      @media (hover: none) and (pointer: coarse), (max-width: 500px) {
        right: -12vw;
        font-size: calc(var(--VW) * 3);
      }

      :hover,
      :focus {
        -webkit-text-stroke: 0.1vw var(--burlywood);
      }
    }
  }

  .works,
  .about {
    right: -3vw;
    color: var(--burlywood);
    font-size: calc(var(--VW) * 1.2);
    transition: 0.3s all ease;
    transform: rotate(90deg);
    transform-origin: 0% 0%;

    @media (hover: none) and (pointer: coarse), (max-width: 500px) {
      right: -12vw;
      font-size: calc(var(--VW) * 3);
    }

    :hover,
    :focus {
      -webkit-text-stroke: 0.1vw var(--burlywood);
    }
  }

  .works {
    top: 2.2vw;
  }

  .about {
    bottom: 6.5vw;

    @media (hover: none) and (pointer: coarse), (max-width: 500px) {
      bottom: 13.5vw;
    }
  }
`;

const Nav = () => {
  return (
    <NavStyles>
      <Link className='logo nav-button' to='/'>
        <svg
          version='1.0'
          xmlns='http://www.w3.org/2000/svg'
          width='406.000000pt'
          height='390.000000pt'
          viewBox='0 0 406.000000 390.000000'
          preserveAspectRatio='xMidYMid meet'
        >
          <g
            transform='translate(0.000000,390.000000) scale(0.100000,-0.100000)'
            fill='#000000'
            stroke='none'
          ></g>
        </svg>
      </Link>
      <Link className='works nav-button' to='/works'>
        Works
      </Link>
      <Link className='about nav-button' to='/about'>
        About
      </Link>
    </NavStyles>
  );
};

export { Nav };
