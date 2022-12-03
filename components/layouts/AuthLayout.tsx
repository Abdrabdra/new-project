import React from 'react';
import styles from '../../styles/Auth.module.css';
import { Link, TextField, Typography, useMediaQuery } from '@mui/material';
import { StyledContainedButton } from '../styled-components/StyledButton';
import logo from '../../public/logo.svg';
// const logo = require('../../public/adu.svg')

const AuthLayout: React.FC = ({ children }) => {
  const isMobile = useMediaQuery('(max-width: 880px)');

  return (
    <div className={styles.authLayout}>
      <div className={styles.logoSide}>
        <img
          src={logo.src}
          alt="ADU24 Market"
          height={isMobile ? "90px" : "164.5px"}
          width={isMobile ? "180px" : "329px"}
          className={styles.logo}
        />
      </div>
      <div className={styles.formSide}>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
