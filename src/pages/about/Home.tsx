import React from 'react';
// import './Home.css';

import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';

export function Home() {
  return (
    <div className="Home">
      <Header/>
      <p>About Beauty Marketplace.</p>
      <Footer/>
    </div>
  );
}
