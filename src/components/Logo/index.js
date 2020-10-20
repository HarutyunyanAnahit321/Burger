import React from 'react';
import LogoIcon from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const Logo = () => {
  return (
    <div className={classes.Logo} >
      <img src={LogoIcon} alt="MyBurger" />
    </div>
  );
};

export default Logo;