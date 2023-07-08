import React, { useState } from 'react';
import css from './Header.module.css';

import arrowDown from '../../assets/images/menu-arrow-down.png';
import arrowUp from '../../assets/images/menu-arrow-up.png';
import menuAvatar from '../../assets/images/menu-avatar.png';

import Menu from '../menu/Menu';

const Header = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleMenu = () => {
    setMenuVisible(!isMenuVisible);
  }

  return (
    <div className={css.header}>
      <h1>Awesome Kanban Board</h1>
      <div className={css.menu} onClick={handleMenu}>
        <img
          className={css.menuAvatar}
          src={menuAvatar}
          alt="menu avatar"
        ></img>
        {isMenuVisible === false ? (
          <img src={arrowDown} alt="open"></img>
        ) : (
          <img src={arrowUp} alt="close"></img>
        )}

        <Menu menu={isMenuVisible} />
      </div>
    </div>
  )
}

export default Header;