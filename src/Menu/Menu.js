import React from 'react';
import {
  Link
} from "react-router-dom";


function Menu() {
  return (
    <div className="menu">
        <ul>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="login">Login</Link></li>
            
        </ul>
    </div>
  );
}

export default Menu;
