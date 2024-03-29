import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Animations } from '../animations';

const PanelStyles = styled(motion.div)`
  bottom: 0;
  left: 0;
  width: calc(var(--VW) * 100);
  height: calc(var(--VH) * 100);
  position: absolute;
  z-index: 30;
  pointer-events: none;

  .left,
  .right {
    top: 0;
    width: 50.5%;
    height: 100%;
    position: absolute;
    z-index: 30;
    background-color: var(--black);
  }

  .left {
    left: 0;
  }

  .right {
    right: 0;
  }

  .message {
    top: 50%;
    left: 0;
    width: 100%;
    color: var(--burlywood);
    text-align: center;
    font-size: calc(var(--VW) * 2);
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 31;

    @media (hover: none) and (pointer: coarse), (max-width: 500px) {
      font-size: calc(var(--VW) * 4);
    }
  }
`;

const generateMessage = () => {
  const messages = [
    'Hold On...',
    'Just A Sec...',
    'Any Minute Now...',
    'Loading...',
    "It's Coming...",
    'One Moment...',
    'Almost There...',
    'Hang On...',
    'Easy Does It...',
  ];
  const randomNum = Math.floor(Math.random() * messages.length);
  return messages[randomNum];
};

const Panels = () => {
  const { transition } = Animations();

  return (
    <PanelStyles>
      <motion.div
        initial={{ height: 0 }}
        animate={{
          height: [window.innerHeight, window.innerHeight, 0, 0],
          top: [0, 0, window.innerHeight, window.innerHeight],
          transition: {
            ...transition,
            duration: 3.5,
            times: [0, 0.6, 0.99, 1],
          },
        }}
        exit={{
          height: [0, 0, window.innerHeight, window.innerHeight],
          top: [0, 0, 0, 0],
          transition: { ...transition, duration: 2, times: [0, 0, 1, 0.9, 1] },
        }}
        className='left'
      ></motion.div>
      <motion.div
        initial={{ height: 0 }}
        animate={{
          height: [window.innerHeight, window.innerHeight, 0, 0],
          top: [0, 0, 0, 0],
          transition: {
            ...transition,
            duration: 3.5,
            times: [0, 0.6, 0.99, 1],
          },
        }}
        exit={{
          height: [0, 0, window.innerHeight, window.innerHeight],
          top: [window.innerHeight, window.innerHeight, 0, 0],
          transition: { ...transition, duration: 2, times: [0, 0, 1, 0.9, 1] },
        }}
        className='right'
      ></motion.div>
      <motion.h2
        initial={{
          opacity: 0,
          display: 'block',
          top: '60%',
          left: '50%',
          x: '-50%',
          y: '-50%',
        }}
        animate={{
          top: ['70%', '50%', '50%', '30%', '40%'],
          left: '50%',
          x: '-50%',
          y: '-50%',
          opacity: [0, 1, 1, 0, 0],
          transition: {
            ...transition,
            duration: 2.4,
            times: [0, 0.5, 0.5, 0.99, 1],
          },
        }}
        exit={{ display: 'none', opacity: 0, transition: { duration: 0.01 } }}
        className='message'
      >
        {window.innerWidth < 500 ? 'Best Viewed on Desktop' : generateMessage()}
      </motion.h2>
    </PanelStyles>
  );
};

export { Panels };
