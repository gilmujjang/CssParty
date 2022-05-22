import React from 'react';
import styled, { keyframes } from 'styled-components';

const animateRoad = keyframes`
  0%{background-position: 50px 0;}
  100%{background-position: 0 0;}
`;

const animateTaxi = keyframes`
  0%{
    transform: translateX(40px) translateY(-40px);
  }
  25%{
    transform: translateX(-20px) translateY(0px);
  }  
  50%{
    transform: translateX(40px) translateY(40px);
  }  
  75%{
    transform: translateX(-20px) translateY(0px);
  }  
  100%{
    transform: translateX(40px) translateY(-40px);
  }
`;

const Road = styled.div`
  margin: auto;
  position: relative;
  width: 1000px;
  height: 240px;
  background: #333;
  border-radius: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  perspective: 500px;
  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    background: linear-gradient(
      90deg,
      #fff,
      #fff 50%,
      transparent 50%,
      transparent 100%
    );
    background-size: 50px;
    animation: ${animateRoad} 0.125s linear infinite;
  }
`;

const TaxiContainer = styled.div`
  position: absolute;
  left: ${(props: Props) => props.left};
  right: ${(props: Props) => props.right};
  width: 200px;
  height: 80px;
  background: #f4b603;
  border-radius: 10px;
  box-shadow: -10px 10px rgba(0, 0, 0, 0.25);
  transform-style: preserve-3d;
  perspective: 800px;
  animation: ${animateTaxi} ${(props: Props) => props.speed} linear infinite;
  ::before {
    content: '';
    position: absolute;
    top: 12px;
    left: 2px;
    width: 5px;
    height: 15px;
    border-radius: 2px;
    background: #fc3c25;
    box-shadow: 0 42px #fc3c25;
  }
  ::after {
    content: '';
    position: absolute;
    top: 12px;
    right: 2px;
    width: 6px;
    height: 16px;
    border-radius: 2px;
    background: #fff;
    box-shadow: 0 42px #fff;
  }
`;

const TaxiBonnet = styled.span`
  position: absolute;
  background: #fdd206;
  inset: 5px 10px;
  border-radius: 10px;
  overflow: hidden;
  ::before {
    content: 'TAXI';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    background: #fff;
    padding: 2px;
    font-size: 0.75em;
    font-weight: bold;
    letter-spacing: 0.1em;
    border-radius: 2px;
    box-shadow: 0 0 0 1px #0005;
    z-index: 10;
  }
`;

const TaxiWindow = styled.b`
  position: absolute;
  inset: 0 30px;
  background: #111;
  border-radius: 10px;
  ::before {
    content: '';
    position: absolute;
    inset: 6px 25px;
    background: #fdd206;
    border-radius: 5px;
  }
  ::after {
    content: '';
    position: absolute;
    inset: 0px 58px;
    background: #fdd206;
  }
`;

const TaxiSash = styled.i`
  position: absolute;
  inset: 0;
  ::before {
    content: '';
    position: absolute;
    top: 7px;
    left: 20px;
    width: 40px;
    height: 5px;
    background: #fdd206;
    transform-origin: right;
    transform: rotate(15deg);
    box-shadow: 100px 34px #fdd206;
  }
  ::after {
    content: '';
    position: absolute;
    bottom: 7px;
    left: 20px;
    width: 40px;
    height: 5px;
    background: #fdd206;
    transform-origin: right;
    transform: rotate(-15deg);
    box-shadow: 100px -34px #fdd206;
  }
`;

const LightBeam = styled.div`
  position: absolute;
  top: 5px;
  right: -2px;
  width: 10px;
  height: 70px;
  background: #0002;
  border-radius: 15px;
  transform-style: preserve-3d;
  ::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 0;
    width: 150px;
    height: 16px;
    background: linear-gradient(90deg, #fff6, transparent);
    transform-origin: left;
    transform: perspective(500px) rotateY(-50deg);
  }
  ::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 150px;
    height: 16px;
    background: linear-gradient(90deg, #fff6, transparent);
    transform-origin: left;
    transform: perspective(500px) rotateY(-50deg);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 50vh;
  margin-top: 96px;
`;

interface Props {
  speed: string;
  left: string;
  right: string;
}

const Taxi = ({ speed, left, right }: Props) => (
  <TaxiContainer speed={speed} left={left} right={right}>
    <LightBeam />
    <TaxiBonnet>
      <TaxiWindow />
      <TaxiSash />
    </TaxiBonnet>
  </TaxiContainer>
);

const MovingTaxi = () => (
  <Container>
    <Road>
      <Taxi speed="2s" left="200px" right="0" />
      <Taxi speed="4s" left="initial" right="300px" />
    </Road>
  </Container>
);

export default MovingTaxi;
