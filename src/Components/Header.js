import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">R-ESCAPE</div>
      <Link to="/search">
        <div className="search-container">
            <button>테마 검색</button>
        </div>
      </Link>
    </header>
  );
}

export default Header;
