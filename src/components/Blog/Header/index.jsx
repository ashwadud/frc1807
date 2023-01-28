import React from 'react';
import './styles.css';

const Header = ({image}) => {
  return (
    <header className="header">
        <div className="header__container">
            <div className="header__container-bg">
                <img src={image} alt="Header Background Image" />
            </div>
            <div className="header__content">
                <h2>Blogs</h2>
                <p>Keep up with our blog</p>
            </div>
        </div>
    </header>
  )
}

export default Header