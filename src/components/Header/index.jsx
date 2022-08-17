import React from 'react'
import mastercraft from 'assets/images/logo-mastercraft.svg'
import bookmark from 'assets/images/icons/icon-bookmark.svg'
import './style.scss'

function Header() {
  return (
    <section className="HeaderSection">
      <img src={mastercraft} alt="mastercraft logo" className="mastercraft-logo" />

      <div className="intro">
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>A beautiful & handcrafted monitor stand to reducer neck and eye strain</p>
      </div>

      <div className="actions">
        <button className="back-project-btn">Back this project</button>
        <button className="bookmark-btn">
          <img src={bookmark} alt="bookmark icon" className="bookmark-icon" />
          <span>Bookmark</span>
        </button>
      </div>
    </section>
  )
}

export default Header
