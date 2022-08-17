import React, { useState } from 'react'
import crowdfund from 'assets/images/logo.svg'
import hamburger from 'assets/images/icons/icon-hamburger.svg'
import closeMenuIcon from 'assets/images/icons/icon-close-menu.svg'
import './style.scss'

function Head() {
  const [showMenu, setShowMenu] = useState(false)

  const handleOpenMenu = () => {
    setShowMenu(true)
  }

  const handleCloseMenu = () => {
    setShowMenu(false)
  }

  return (
    <header className="HeadSection">
      <div className="inner-wrapper">
        <img src={crowdfund} alt="crowdfund logo" className="crowdfund-logo" />

        <nav className={`nav-menu ${showMenu && 'show'}`}>
          <a className="nav-link" href="#about">
            <span>About</span>
          </a>
          <a className="nav-link" href="#discover">
            <span>Discover</span>
          </a>
          <a className="nav-link" href="#getstarted">
            <span>Get Started</span>
          </a>
        </nav>

        {showMenu ? (
          <img
            src={closeMenuIcon}
            alt="close menu icon"
            className="close-menu-icon"
            onClick={handleCloseMenu}
          />
        ) : (
          <img
            src={hamburger}
            alt="hamburger icon"
            className="hamburger-icon"
            onClick={handleOpenMenu}
          />
        )}
      </div>
    </header>
  )
}

export default Head
