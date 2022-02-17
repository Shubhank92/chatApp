import React from 'react';
import './navbar.css';
import { FaHome, FaRegCommentDots, FaHammer, FaRegPaperPlane } from "react-icons/fa";
// import { Link } from 'react-router-dom';

const Navbar = () => {
    return <nav>
        <ul className='nav'>
        <li>
          <FaRegPaperPlane className='icon'/>
        </li>
        <li>
        {/* convert it into Link tag later */}
          <FaHome className='icon'/>
        </li>
        <li>
          <FaRegCommentDots className='icon'/>
        </li>
        <li>
          <FaHammer className='icon'/>
        </li>
      </ul>
    </nav>
}

export default Navbar;