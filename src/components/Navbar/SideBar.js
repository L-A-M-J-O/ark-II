import React from 'react'
import { useState, useEffect } from 'react';

// Style
import './SideBar.css';

export default function SideBar() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav> 
        <button onClick={() => { setIsOpen(!isOpen)}} className='btn bg-dark text-white'>
          <span>Home</span>
        </button>
        {
          isOpen && (
            <div className={`${isOpen? 'active' : 'inactive'}`}>
              <h1>Alan</h1>
            </div>
          )
        }  
      </nav>
    </>
  )
}