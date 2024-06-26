import React from 'react';
import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
	loginMargin: {
		margin: '4px',
	},
	loginSize: {
		'@media {max-width: 900px}': {
			display: 'block',
			marginTop: '2px',
			marginBottom: '8px',
		}
	}
})


function Login() {
  return (
    <main role='main' className={css(styles.loginMargin, styles.loginSize)}>
      <p>Login to access the full dashboard</p>
      <label htmlFor='email'>Email</label>
      <input type='email' name='email' id='email' />
      <label htmlFor='password'>Password</label>
      <input type='password' name='password' id='password' />
      <button type='button'>OK</button>
    </main>
  );
}

export default Login;
