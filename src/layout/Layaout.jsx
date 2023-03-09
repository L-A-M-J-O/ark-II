import React from 'react';

import './Layaout.css';

import { Routes, Route,} from 'react-router-dom';

import Home from '../view/Home/Home';
// import SideBar from '../components/Navbar/SideBar';

function Layaout() {
  return (
    <section className='container-fluid'>
      <header>
        {/* <SideBar/> */}
      </header>
              {/* <video className='video-main m-0 p-0' width='100%' height='100%' autoPlay loop muted playsInline>
                <source src='../video/videoIsland.mp4' type='video/mp4'/>
              </video> */}
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </main>
      <footer>
      </footer>
    </section>
  )
}

export default Layaout