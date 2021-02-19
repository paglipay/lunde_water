import React from 'react';
import HeroSection from '../../components/hero/HeroSection';
import { homeObjZero, homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from './Pricing';
// import CardExampleCard from '../../CardExampleCard/CardExampleCard';
import { Container, Row, Col } from 'react-bootstrap'

function Home() {
  return (
    <>
      <HeroSection {...homeObjZero} />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      {/* <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} /> */}
      <Pricing />
    </>
  );
}

export default Home;
