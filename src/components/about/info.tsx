import React from 'react';
import styled from 'styled-components';

const InfoStyles = styled.div`
  margin-bottom: 20vh;
  margin-right: 5vw;
  display: flex;
  justify-content: space-between;

  @media (hover: none) and (pointer: coarse), (max-width: 500px) {
    flex-wrap: wrap;
    margin-bottom: 10vh;
  }

  .info-main {
    width: 48%;

    @media (hover: none) and (pointer: coarse), (max-width: 500px) {
      width: 95%;
    }

    h2 {
      font-size: calc(var(--VW) * 2);

      @media (hover: none) and (pointer: coarse), (max-width: 500px) {
        font-size: calc(var(--VW) * 4);
      }
    }

    p {
      margin-bottom: 3vw;

      @media (hover: none) and (pointer: coarse), (max-width: 500px) {
        margin-bottom: 5vw;
      }

      :last-child {
        margin-bottom: 0;
      }
    }
  }

  .info-credits {
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media (hover: none) and (pointer: coarse) {
      width: 68%;
      margin-top: 10vh;
    }

    @media (hover: none) and (pointer: coarse) and (max-width: 500px) {
      width: 80%;
      margin-top: 10vh;
    }

    h1 {
      font-size: calc(var(--VW) * 4);

      @media (hover: none) and (pointer: coarse), (max-width: 500px) {
        font-size: calc(var(--VW) * 6);
      }
    }

    h2 {
      margin: 0.5vw 0;
      font-size: calc(var(--VW) * 2);

      @media (hover: none) and (pointer: coarse), (max-width: 500px) {
        font-size: calc(var(--VW) * 4);
      }

      :last-child {
        margin-bottom: 0;
      }
    }

    p {
      margin-bottom: 3vw;

      :nth-child(2) {
        margin-bottom: 1vw;
        margin-top: 0.5vw;
      }
    }
  }
`;

const Info = () => {
  return (
    <InfoStyles data-scroll-section className='info'>
      <div className='info-main'>
        <h2>FrontEnd</h2>
        <p>
          TypeScript, JavaScript(ES6+), React, Redux, Next.js, Framer Motion,
          Styled Components, GraphQL, HTML5, CSS3/Scss/Sass.
        </p>
        <h2>BackEnd</h2>
        <p>Node.js, Express.js, Nest.js, MongoDB, TypeORM, Prisma.</p>
        <h2>Cloud</h2>
        <p>Docker, Kubernetes, AWS, CI/CD, Github Actions.</p>
        <h2>Learning</h2>
        <p>Web 3.0, Ethereum, Solidity.</p>
        <h2>Soft Skills</h2>
        <p>
          Teamwork, Agile Methodologies, Motivated, Self-taught, Good English
          Communication Skills.
        </p>
      </div>
    </InfoStyles>
  );
};

export { Info };
