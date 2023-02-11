import React from 'react';

import './Layaout.css';

import { Routes, Route,} from 'react-router-dom';

import Home from '../view/Home/Home';
import SideBar from '../components/Navbar/SideBar';

function Layaout() {
  return (
    <>
      <header>
        <section className='container-fluid m-0 p-0'>
          <SideBar/>
          <div className='main__box'>
            <video className='video-main m-0 p-0' width='100%' height='100%' autoPlay loop muted playsInline>
              <source src='../video/videoIsland.mp4' type='video/mp4'/>
            </video>
          </div>
        </section>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </main>
      <footer>
      </footer>
    </>
  )
}

export default Layaout