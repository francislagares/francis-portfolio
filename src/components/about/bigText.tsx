import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Animations } from '../../animations';

const BigTextStyles = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  margin-bottom: 10vh;

  .container {
    overflow: hidden;
    width: 100%;

    :nth-child(2) {
      text-align: right;
    }

    :nth-child(3) {
      padding-left: 15vw;
    }

    h1 {
      height: 10vw;
      font-size: calc(var(--VW) * 11);
      text-transform: uppercase;
      line-height: 10vw;
      overflow: hidden;
    }
  }
`;

const BigText = () => {
  const { transition, textReveal } = Animations();
  return (
    <BigTextStyles data-scroll-section className='big-text'>
      <div className='container'>
        <motion.h1
          variants={textReveal}
          initial='initial'
          animate='animate'
          transition={{ ...transition, delay: 3 }}
        >
          Slicker
        </motion.h1>
      </div>
      <div className='container'>
        <motion.h1
          variants={textReveal}
          initial='initial'
          animate='animate'
          transition={{ ...transition, delay: 3.2 }}
        >
          than your
        </motion.h1>
      </div>
      <div className='container'>
        <motion.h1
          variants={textReveal}
          initial='initial'
          animate='animate'
          transition={{ ...transition, delay: 3.4 }}
        >
          average
        </motion.h1>
      </div>
      <div className='container'>
        <motion.h1
          variants={textReveal}
          initial='initial'
          animate='animate'
          transition={{ ...transition, delay: 3.6 }}
        >
          web dev.
        </motion.h1>
      </div>
    </BigTextStyles>
  );
};

export { BigText };
