import React from 'react'
import { useState,  } from 'react';

// Style
import './SideBar.css';

export default function SideBar() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav>
        <div className='row box-menu'>
          <div className='col-12 p-0 mx-2'>
            <button onClick={() => { setIsOpen(!isOpen)}} className='menu-hamburger'>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          {
            isOpen && (
              <div className={`${isOpen? 'active' : 'inactive'} sidebar`}>
                <div className=''>
                <h3>DLC</h3>
                <h3>NEWS</h3>
                <h3>SERVIDORES</h3>
                <h3>ABOUT TEAM</h3>
                </div>
              </div>
            )
          } 
        </div>
      </nav>
    </>
  )
}