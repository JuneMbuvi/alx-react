import React from 'react';
import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
	loginMargin: {
		margin: '4px',
	}
})


function Login() {
  return (
    <main role='main' className={css(styles.loginMargin)}>
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
