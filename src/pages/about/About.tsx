import React from 'react';
import { Container } from '@material-ui/core';
import './About.scss';

import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';

export function About() {
  return (
    <Container className="About">
      <Header/>
      <p>About Skincare Marketplace.</p>
      <Footer/>
    </Container>
  );
}
