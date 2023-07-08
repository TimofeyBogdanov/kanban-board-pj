import React from 'react';
import css from './Menu.module.css';
import avatarArrow from '../../assets/images/menu-avatar-arrow-up.png'

const Menu = ({ menu }) => {
  return (
    <div className={menu ? css.menuVisible : css.menuHidden}>
      <img className={css.avatarArrow} src={avatarArrow} alt=""></img>
      <ul className={css.menuList}>
        <li>Profile</li>
        <li>Log Out</li>
      </ul>
    </div>
  )
}

export default Menu;