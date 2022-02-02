import React from 'react';
import {Hero} from './components/Header'
import game from './components/game.png';
import { Footer } from './components/Footer';
export function Main() {
  return <div>
      <Hero/>
      <img src={game} alt=""/>
      <Footer/>
  </div>;
}
