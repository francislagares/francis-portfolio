import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Animations } from '../animations';
import { Nav } from '../components/nav';
import { Panels } from '../components/panels';
import { DesktopSection } from '../components/projectPage/desktopSection';
import { MainSection } from '../components/projectPage/mainSection';
import { PhoneSection } from '../components/projectPage/phoneSection';
import { ProjectFooter } from '../components/projectPage/projectFooter';
import { SecondarySection } from '../components/projectPage/secondarySection';
import { TabletSection } from '../components/projectPage/tabletSection';
import { useData } from '../hooks/useData';
import { useScroll } from '../hooks/useScroll';

const ProjectStyles = styled(motion.div)`
  padding: 6vw 5vw;
  padding-right: 6vw;

  .number {
    display: flex;
    justify-content: flex-start;
    position: relative;
    left: -26%;
    overflow: hidden;
    margin: 5vw 0;

    @media (hover: none) and (pointer: coarse), (max-width: 500px) {
      left: -38%;
      width: 120%;
      margin: 15vw 0;
    }

    &-wrapper {
      overflow: hidden;

      h1 {
        bottom: -10%;
        height: 33vw;
        font-size: calc(var(--VW) * 40);
        line-height: 33vw;
        position: relative;

        @media (hover: none) and (pointer: coarse), (max-width: 500px) {
          height: 50vw;
          font-size: calc(var(--VW) * 60);
          line-height: 50vw;
        }
      }
    }
  }
`;

type Params = {
  projectID: string;
};

const Project = () => {
  const { scrollRef } = useScroll();
  const { projectID } = useParams<Params>();
  const { getData } = useData();
  const { transition, angleTextReveal } = Animations();

  const {
    title,
    sequence,
    text,
    secondary,
    phoneImgSrc,
    desktopImgSrc,
    tabletImgSrc,
    mobileFirst,
    githubLink,
    liveLink,
    next,
  } = getData(projectID);

  return (
    <>
      <Nav />
      <Panels />
      <ProjectStyles
        initial={{ backgroundColor: '#000322', pointerEvents: 'none' }}
        animate={{ backgroundColor: 'transparent', pointerEvents: 'unset' }}
        exit={{
          opacity: [1, 1, 0],
          transition: { duration: 2, times: [0, 0.99, 1] },
        }}
        ref={scrollRef}
        data-scroll-container
      >
        <div data-scroll-section className='number'>
          <div className='number-wrapper'>
            <motion.h1
              variants={angleTextReveal}
              initial='initial'
              animate='animate'
              transition={{ ...transition, duration: 2, delay: 3 }}
            >
              0
            </motion.h1>
          </div>
          <div className='number-wrapper'>
            <motion.h1
              variants={angleTextReveal}
              initial='initial'
              animate='animate'
              transition={{ ...transition, duration: 2, delay: 3.4 }}
            >
              {sequence}
            </motion.h1>
          </div>
        </div>
        <MainSection
          title={title}
          texts={text}
          githubLink={githubLink}
          liveLink={liveLink}
        />
        <SecondarySection secondary={secondary} />
        {mobileFirst && desktopImgSrc.length > 0 && phoneImgSrc.length > 0 && (
          <>
            <PhoneSection phoneImgSrc={phoneImgSrc} />
            <DesktopSection desktopImgSrc={desktopImgSrc} />
          </>
        )}
        {mobileFirst &&
          desktopImgSrc.length === 0 &&
          phoneImgSrc.length > 0 && <PhoneSection phoneImgSrc={phoneImgSrc} />}
        {!mobileFirst && phoneImgSrc.length > 0 && (
          <>
            <DesktopSection desktopImgSrc={desktopImgSrc} />
            <PhoneSection phoneImgSrc={phoneImgSrc} />
          </>
        )}
        {tabletImgSrc.length > 0 && (
          <TabletSection tabletImgSrc={tabletImgSrc} />
        )}
        <ProjectFooter next={next} />
      </ProjectStyles>
    </>
  );
};

export { Project };
