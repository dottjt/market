import React from 'react';
import './Home.scss';

import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import { Wizard } from '../../components/Wizard/Wizard';

export function Home() {
  return (
    <div className="Home">
      <Header/>
      <Wizard/>
      <Footer/>
    </div>
  );
}
