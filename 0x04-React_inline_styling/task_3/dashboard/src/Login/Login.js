import React from 'react';
import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
	loginMargin: {
		margin: '4px',
	},
	screenSize: {
		'@media (max-width: 900px)': {
			display: 'block',
			margin-top: '2px',
			margin-bottom: '8px',
		}
	}
})


function Login() {
  return (
    <main role='main' className={css(styles.loginMargin, styles.screenSize)}>
      <p>Login to access the full dashboard</p>
      <label htmlFor='email'>Email</label>
      <input type='email' name='email' id='email' />
      <label htmlFor='password'>Password</label>
      <input type='password' name='password' id='password' />
      <hr />
      <button type='button'>OK</button>
    </main>
  );
}

export default Login;
