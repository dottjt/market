import React from 'react';
import './About.css';

import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';

export function About() {
  return (
    <div className="About">
      <Header/>
      <p>About Beauty Marketplace.</p>
      <Footer/>
    </div>
  );
}
