import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Animations } from '../animations';
import { WorksListItem } from '../data/worksList';
import { useMousePosition } from '../hooks/useMousePosition';

const WorksItemStyles = styled.li`
  width: 100%;
  position: relative;

  a {
    height: 100%;

    .wrapper {
      height: 100%;
      display: flex;
      align-items: flex-end;
      pointer-events: none;

      .title {
        margin: 0 1vw;

        h2 {
          overflow: hidden;

          .text {
            font-size: calc(var(--VW) * 3.5);

            @media (hover: none) and (pointer: coarse), (max-width: 500px) {
              position: relative;
              top: 0.7vh;
              font-size: calc(var(--VW) * 7);
            }
          }
        }
      }

      .thumbnail {
        bottom: 1.1vw;
        width: 7vw;
        height: 100%;
        font-size: calc(var(--VW) * 3.5);
        overflow: hidden;
        position: absolute;

        @media (hover: none) and (pointer: coarse), (max-width: 500px) {
          /* width: 10vw; */
          display: none;
        }

        .mask {
          top: 0;
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 9;
          background-color: transparent;

          @media (hover: none) and (pointer: coarse), (max-width: 500px) {
            /* width: 10vw; */
            display: none;
          }
        }

        .cover {
          top: 0;
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 10;
          background-color: var(--burlywood);
        }

        img {
          right: 0;
          width: auto;
          height: 100%;
          position: absolute;
          display: block;
        }
      }

      .floating-image {
        width: auto;
        height: 15vw;
        pointer-events: none;
        position: absolute;
        z-index: 10;
        overflow: hidden;
        opacity: 0;

        @media (hover: none) and (pointer: coarse), (max-width: 500px) {
          display: none;
        }

        img {
          width: auto;
          height: 100%;
          display: block;
        }
      }

      .line {
        bottom: 1vw;
        width: 100%;
        height: 0.1vw;
        background-color: var(--burlywood);
        position: relative;
        display: flex;
        align-items: center;

        &.flex-0 {
          flex: 0;

          &::after {
            display: none;
          }
        }

        &.flex-1 {
          flex: 1;
        }

        &.flex-2 {
          flex: 2;
        }

        &.flex-3 {
          flex: 3;
        }

        &::after {
          width: 0.5vw;
          height: 0.5vw;
          border-radius: 100%;
          content: '';
          position: absolute;
          background-color: var(--burlywood);
        }

        &.left {
          &::after {
            right: 0;
          }
        }

        .mask {
          width: 100%;
          height: 0.6vw;
          z-index: 9;
          position: absolute;
          background-color: var(--black);
        }

        .cover {
          width: 100%;
          height: 0.6vw;
          z-index: 10;
          position: absolute;
          background-color: var(--burlywood);
        }
      }
    }
  }
`;
type Prop = {
  data: WorksListItem;
};

const WorksItem = (props: Prop) => {
  const {
    title,
    src,
    leftFlex,
    rightFlex,
    thumbnailOffset,
    offsetX,
    offsetY,
    id,
  } = props.data;
  const { x, y } = useMousePosition();
  const [listPosition, setListPosition] = useState({ top: 0, left: 0 });
  const [hovered, setHovered] = useState(false);
  const listRef = useRef<HTMLLIElement>(null);
  const { transition, maskAnimation, textReveal } = Animations();

  useEffect(() => {
    if (listRef.current) {
      setListPosition({
        top: listRef.current.getBoundingClientRect().top,
        left: listRef.current.getBoundingClientRect().left,
      });
    }
  }, [hovered]);

  return (
    <WorksItemStyles
      ref={listRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/works/${id}`}>
        <div className='wrapper'>
          <div className={`line left flex-${leftFlex}`}>
            <motion.div
              variants={maskAnimation}
              transition={{ ...transition, duration: 1 }}
              className='mask'
            ></motion.div>
            <motion.div
              initial={{ backgroundColor: '#000322' }}
              animate={{ backgroundColor: 'unset' }}
              className='cover'
            ></motion.div>
          </div>
          <motion.div className='title'>
            <h2>
              <motion.div
                variants={textReveal}
                transition={transition}
                className='text'
              >
                {title}
              </motion.div>
            </h2>
          </motion.div>
          <motion.div className='thumbnail' style={{ left: thumbnailOffset }}>
            <img src={src} alt='' />
            <motion.div
              variants={maskAnimation}
              transition={{ ...transition, duration: 1 }}
              className='mask'
            ></motion.div>
            <motion.div
              initial={{ backgroundColor: '#000322' }}
              animate={{ backgroundColor: 'unset' }}
              className='cover'
            ></motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: hovered ? 1 : 0,
              x: `calc(${x - listPosition.left}px - ${offsetX}vw)`,
              y: `calc(${y - listPosition.top}px - ${offsetY}vw)`,
            }}
            transition={{ ease: 'linear', duration: 0.2 }}
            className='floating-image'
          >
            <motion.img
              animate={{
                x: hovered ? 0 : '-120%',
                opacity: hovered ? 1 : 0.7,
              }}
              transition={{
                ease: [0.6, -0.05, 0.01, 0.9],
                duration: 0.6,
                delay: 0.05,
              }}
              src={src}
              alt=''
            />
          </motion.div>
          <motion.div
            variants={maskAnimation}
            transition={{ ...transition, duration: 1 }}
            className={`line right flex-${rightFlex}`}
          >
            <motion.div
              variants={maskAnimation}
              transition={{ ...transition, duration: 1 }}
              className='mask right'
            ></motion.div>
            <motion.div
              initial={{ backgroundColor: '#000322' }}
              animate={{ backgroundColor: 'unset' }}
              className='cover'
            ></motion.div>
          </motion.div>
        </div>
      </Link>
    </WorksItemStyles>
  );
};

export { WorksItem };
