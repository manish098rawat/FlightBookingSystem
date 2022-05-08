import React from 'react'

// import Footer from './footer/Footer';
import Hero from './hero/Hero'
import Navbar from './navbar/Navbar'
import Search from './search/Search';
import Selects from './selects/Selects';

import './App.css';

export default function Home() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Search />
      <Selects />


    </div>
  )
}