import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { login } from '../../store/session';
import styles from './Login.module.css';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className={styles.loginPageBackground}>
      <div className={styles.loginContainer}>
        <h1 className={styles.heading1}>Welcome back</h1>
        <h2 className={styles.heading2}>Log in</h2>
        <form className={styles.loginForm} onSubmit={onLogin}>
          <div className={styles.loginErrorsContainer}>
            {errors.map((error, ind) => (
              <div>
                <div key={ind}>{error}
                  {console.log(errors)}
                </div>
              </div>
            ))}
          </div>
          <div>
            <input className={styles.loginEmail} name='email' type='text' placeholder='Email' value={email} onChange={updateEmail} />
          </div>
          <div>
            <input className={styles.loginPassword} name='password' type='password' placeholder='Password' value={password} onChange={updatePassword} />
          </div>
          <button className={styles.loginSubmit} type='submit'>Login</button>
          <br/>
          <Link className={styles.dontHaveAccount} to="/signup">Don't have an account yet? <span className={styles.noAccountLink}>Sign up</span></Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
