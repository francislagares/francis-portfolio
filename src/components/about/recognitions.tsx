import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { AwardsInfo } from '../../data/awardsInfo';
import { useMousePosition } from '../../hooks/useMousePosition';

const MarqueeStyles = styled.div`
  position: relative;
  left: -10vw;

  .left,
  .right {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    span {
      font-size: calc(var(--VW) * 8);
      font-weight: 100;
      position: relative;
      display: inline-block;
      font-family: Monument, sans-serif;
      text-transform: uppercase;
      padding-right: 2vw;
    }
  }

  .left {
    span {
      border-top: 0.5vw solid var(--black);
      border-bottom: 0.5vw solid var(--black);
    }
  }

  .right {
    span {
      border-bottom: 0.5vw solid var(--black);
    }
  }
`;

const DetailsStyles = styled.div`
  width: 100%;
  margin: 10vh 0 20vh 0;
  position: relative;
  padding-right: 5vw;
  display: flex;
  justify-content: flex-end;

  @media (hover: none) and (pointer: coarse), (max-width: 500px) {
    margin-bottom: 10vh;
  }

  .container {
    width: 50%;
    display: flex;
    justify-content: space-between;

    @media (hover: none) and (pointer: coarse), (max-width: 500px) {
      width: 100%;
    }

    p {
      margin: 1vw 0;
      padding: 1vw 0;
      font-size: calc(var(--VW) * 2);

      @media (hover: none) and (pointer: coarse), (max-width: 500px) {
        font-size: calc(var(--VW) * 4.5);
      }
    }
  }

  .certificate {
    @media (hover: none) and (pointer: coarse), (max-width: 500px) {
      display: none;
    }

    pointer-events: none;
    position: absolute;
    height: 50vh;
    z-index: 0;
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.1);

    img {
      width: auto;
      height: 100%;
      display: block;
    }
  }
`;

const Recognitions = () => {
  const travelDistance = 85.7;
  const { x, y } = useMousePosition();
  const [hovered, setHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const hoverAward = (imageURL: string) => {
    setHovered(true);
    setCurrentImage(imageURL);
  };
  const unHoverAward = () => {
    setHovered(false);
    setCurrentImage('');
  };
  return (
    <>
      <MarqueeStyles data-scroll-section>
        <div className='left'>
          <motion.span
            initial={{ left: 0 }}
            animate={{ left: `-${travelDistance}%` }}
            transition={{ ease: 'linear', duration: 12, repeat: Infinity }}
          >
            Recognitions
          </motion.span>
          <motion.span
            initial={{ left: 0 }}
            animate={{ left: `-${travelDistance}%` }}
            transition={{ ease: 'linear', duration: 12, repeat: Infinity }}
          >
            Recognitions
          </motion.span>
          <motion.span
            initial={{ left: 0 }}
            animate={{ left: `-${travelDistance}%` }}
            transition={{ ease: 'linear', duration: 12, repeat: Infinity }}
          >
            Recognitions
          </motion.span>
          <motion.span
            initial={{ left: 0 }}
            animate={{ left: `-${travelDistance}%` }}
            transition={{ ease: 'linear', duration: 12, repeat: Infinity }}
          >
            Recognitions
          </motion.span>
        </div>
        <div className='right'>
          <motion.span
            initial={{ right: `${travelDistance}%` }}
            animate={{ right: 0 }}
            transition={{ ease: 'linear', duration: 12, repeat: Infinity }}
          >
            Recognitions
          </motion.span>
          <motion.span
            initial={{ right: `${travelDistance}%` }}
            animate={{ right: 0 }}
            transition={{ ease: 'linear', duration: 12, repeat: Infinity }}
          >
            Recognitions
          </motion.span>
          <motion.span
            initial={{ right: `${travelDistance}%` }}
            animate={{ right: 0 }}
            transition={{ ease: 'linear', duration: 12, repeat: Infinity }}
          >
            Recognitions
          </motion.span>
          <motion.span
            initial={{ right: `${travelDistance}%` }}
            animate={{ right: 0 }}
            transition={{ ease: 'linear', duration: 12, repeat: Infinity }}
          >
            Recognitions
          </motion.span>
        </div>
      </MarqueeStyles>
      <DetailsStyles data-scroll-section>
        <div className='container'>
          <div className='container-left'>
            {AwardsInfo.map(award => {
              return (
                <p
                  onMouseEnter={() => hoverAward(award.imgURL)}
                  onMouseLeave={() => unHoverAward()}
                  key={award.id}
                >
                  {award.text}
                </p>
              );
            })}
          </div>
          <div className='container-right'>
            <p>Mar 2021</p>
            <p>Feb 2021</p>
            <p>Feb 2021</p>
            <p>Feb 2021</p>
            <p>Feb 2021</p>
            <p>Feb 2021</p>
            <p>Feb 2021</p>
            <p>Feb 2021</p>
          </div>
        </div>
        <motion.div
          className='certificate'
          initial={{ opacity: 0 }}
          animate={{
            opacity: hovered ? 1 : 0,
            x: x,
            y: y,
            left: '-40%',
            top: '-50%',
          }}
          transition={{ duration: 0.3, ease: 'linear' }}
        >
          <img src={currentImage} alt='' />
        </motion.div>
      </DetailsStyles>
    </>
  );
};

export { Recognitions };
