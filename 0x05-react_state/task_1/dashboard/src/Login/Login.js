import React from 'react';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  loginMargin: {
    margin: '4px',
  },
  screenSize: {
    '@media (max-width: 900px)': {
      display: 'block',
      marginTop: '2px',
      marginBottom: '8px',
    }
  }
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    this.setState({ isLoggedIn: true });
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value
    }, () => {
      if (this.state.email !== '' && this.state.password !== '') {
        this.setState({
          enableSubmit: true,
        });
      }
    });
  }

  handleChangePassword(event) {
    this.setState({
      password: event.target.value
    }, () => {
      if (this.state.email !== '' && this.state.password !== '') {
        this.setState({
          enableSubmit: true
        });
      }
    });
  }

  render() {
    return (
      <main role='main' className={css(styles.loginMargin, styles.screenSize)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' value={this.state.email} onChange={this.handleChangeEmail} />
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' value={this.state.password} onChange={this.handleChangePassword} />
          <hr />
          <input type='submit' disabled={!this.state.enableSubmit} />
        </form>
      </main>
    );
  }
}

export default Login;
