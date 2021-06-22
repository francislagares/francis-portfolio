import React, { useRef, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import hoverEffect from 'hover-effect';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Animations } from '../animations';
import DisplacementImg from '../assets/images/homepage/glass.webp';
import Ronnie from '../assets/images/homepage/profile.webp';
import Ronnie2 from '../assets/images/homepage/profile2.webp';
//components
import { Names } from '../components/homepage/names';
import { Panels } from '../components/panels';
//icons
library.add(fab);

const HomepageStyles = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  padding: 2vw;

  @media (hover: none) and (pointer: coarse) {
    padding: 10vh 5vw;
  }

  .left {
    width: 24%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (hover: none) and (pointer: coarse), (max-width: 500px) {
      display: none;
    }

    &-top {
      .pic {
        height: 50vh;
        overflow: hidden;
      }
      /* stylelint-disable */
      .descriptions {
        text-align: justify;
        margin-top: 3vh;
      }
    }

    &-bottom {
      overflow: hidden;

      a {
        margin-right: 3vw;
        display: inline-block;

        svg {
          width: 2.5vw;
          height: 2.5vw;
          color: var(--burlywood);
          pointer-events: none;
          mix-blend-mode: normal;
          background-color: var(--black);

          &:hover,
          &:focus {
            color: var(--burlywood);
            background-color: var(--black);
          }
        }
      }
    }
  }

  .right {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (hover: none) and (pointer: coarse), (max-width: 500px) {
      width: 100%;
    }

    &-descriptions {
      display: none;

      @media (hover: none) and (pointer: coarse), (max-width: 500px) {
        width: 52%;
        margin: 5vh 0;
        text-align: justify;
        display: block;
      }

      @media (max-width: 500px) {
        width: 85%;
      }
    }

    &-bottom {
      top: 1%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-grow: 1;
      max-height: 40vh;
      position: relative;

      @media (hover: none) and (pointer: coarse), (max-width: 500px) {
        margin-top: 0;
        margin-bottom: 5vh;
      }

      .link-container {
        text-align: right;
        overflow: hidden;
        color: var(--burlywood);

        :nth-child(1) {
          padding-right: 5vw;

          @media (hover: none) and (pointer: coarse), (max-width: 500px) {
            padding-right: 0;
          }
        }

        :nth-child(3) {
          padding-right: 10vw;

          @media (hover: none) and (pointer: coarse), (max-width: 500px) {
            padding-right: 0;
          }
        }

        .link-wrapper {
          a {
            height: calc(var(--VW) * 6);
            font-size: calc(var(--VW) * 7);
            display: inline-block;
            line-height: calc(var(--VW) * 6);

            @media (hover: none) and (pointer: coarse), (max-width: 500px) {
              height: calc(var(--VW) * 11);
              font-size: calc(var(--VW) * 12);
              line-height: calc(var(--VW) * 11);
            }

            .number {
              font-size: calc(var(--VW) * 2);
              pointer-events: none;

              @media (hover: none) and (pointer: coarse), (max-width: 500px) {
                font-size: calc(var(--VW) * 3);
              }
            }
          }
        }
      }
    }
  }
`;

const Home = () => {
  const profile = useRef(null);
  const { transition, opacityReveal, angleTextReveal } = Animations();
  useEffect(() => {
    new hoverEffect({
      parent: profile.current,
      intensity: 1.4,
      image1: Ronnie2,
      image2: Ronnie,
      displacementImage: DisplacementImg,
    });
  });

  return (
    <>
      <Panels />
      <HomepageStyles
        initial={{ backgroundColor: '#000322', pointerEvents: 'none' }}
        animate={{ backgroundColor: 'transparent', pointerEvents: 'unset' }}
        exit={{
          opacity: [1, 1, 0],
          transition: { duration: 2, times: [0, 0.99, 1] },
        }}
      >
        <div className='left'>
          <div className='left-top'>
            <div className='pic' ref={profile}></div>
            <div className='descriptions'>
              <motion.p
                variants={opacityReveal}
                initial='initial'
                animate='animate'
                transition={{ ...transition, duration: 1, delay: 4.5 }}
              >
                Interactive developer striving to craft memorable experiences on
                the digital canvas. Front-end addicted, Fullstack capable.
                Currently located in Toronto.
              </motion.p>
            </div>
          </div>
          <div className='left-bottom'>
            <motion.a
              variants={opacityReveal}
              initial='initial'
              animate='animate'
              transition={{ ...transition, duration: 1, delay: 5.7 }}
              href='https://www.linkedin.com/in/francislagares/'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </motion.a>
            <motion.a
              variants={opacityReveal}
              initial='initial'
              animate='animate'
              transition={{ ...transition, duration: 1, delay: 5.9 }}
              href='https://github.com/francislagares'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={['fab', 'github']} />
            </motion.a>
          </div>
        </div>
        <div className='right'>
          <Names />
          <div className='right-descriptions'>
            <motion.p
              variants={opacityReveal}
              initial='initial'
              animate='animate'
              transition={{ ...transition, duration: 1, delay: 4.5 }}
            >
              Interactive developer striving to craft memorable experiences on
              the digital canvas. Front-end addicted, Fullstack capable.
              Currently located in Toronto.
            </motion.p>
          </div>
          <div className='right-bottom'>
            <motion.div className='link-container'>
              <motion.div
                className='link-wrapper'
                variants={angleTextReveal}
                initial='initial'
                animate='animate'
                transition={{ ...transition, duration: 1, delay: 5 }}
              >
                <Link to='works'>
                  <span className='number'>01.</span>Works
                </Link>
              </motion.div>
            </motion.div>
            <motion.div className='link-container'>
              <motion.div
                className='link-wrapper'
                variants={angleTextReveal}
                initial='initial'
                animate='animate'
                transition={{ ...transition, duration: 1, delay: 5.2 }}
              >
                <Link to='about'>
                  <span className='number'>02.</span>About
                </Link>
              </motion.div>
            </motion.div>
            <motion.div className='link-container'>
              <motion.div
                className='link-wrapper'
                variants={angleTextReveal}
                initial='initial'
                animate='animate'
                transition={{ ...transition, duration: 1, delay: 5.4 }}
              >
                <a href='mailto:francis.lagares@gmail.com'>
                  <span className='number'>03.</span>Contact
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </HomepageStyles>
    </>
  );
};

export { Home };
