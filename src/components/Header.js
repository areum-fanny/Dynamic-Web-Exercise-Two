import React from 'react';

import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="Header">          
          <h1 className="AppName">Weather App</h1>
          <nav>
            <a href="/?city=Westborough">Westborough</a>
            <a href="/?city=Amsterdam">Amsterdam</a>
            <a href="/?city=Muscat">Muscat</a>
            <a href="/?city=Trichy">Trichy</a>
          </nav>
        </header>
    );
  }
  
  export default Header;