import React from 'react'
import { useState,  } from 'react';

// Style
import './SideBar.css';

export default function SideBar() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav> 
        <button onClick={() => { setIsOpen(!isOpen)}} className =' manuel btn bg-dark text-white'>
          <span>Home</span>
        </button >
        {
          isOpen && (
            <div className={`${isOpen? 'active' : 'inactive'}`}>
              <div className='sidebar'>
              <h3>DLC</h3>
              <h3>NEWS</h3>
              <h3>SERVIDORES</h3>
              <h3>ABOUT TEAM</h3>
              </div>
            </div>
          )
        }  
      </nav>
    </>
  )
}