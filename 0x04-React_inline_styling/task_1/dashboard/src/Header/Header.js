import React from 'react';
import { css, StyleSheet } from "aphrodite";
import logo from '../assets/holberton-logo.jpg';


const styles = StyleSheet.create({
	header: {
		display: flex,
		color: #e0344a,
		align-items: center,
		border-bottom: thick solid #e0344a,
},
	headerLogo: {
		width: 144px,
		height: 144px,
}

})

function Header() {
  return (
    <header className={css(styles.header)}>
      <img src={logo} className={css(styles.headerLogo)} alt='logo' />
      <h1>School dashboard</h1>
    </header>
  );
}

export default Header;
