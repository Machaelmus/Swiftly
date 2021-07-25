import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
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
        <h1>Log in</h1>
        <form className={styles.loginForm} onSubmit={onLogin}>
          <div className={styles.loginErrorsContainer}>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div>
            <input className={styles.loginEmail} name='email' type='text' placeholder='Email' value={email} onChange={updateEmail} />
          </div>
          <div>
            <input className={styles.loginPassword} name='password' type='password' placeholder='Password' value={password} onChange={updatePassword} />
          </div>
          <button className={styles.loginSubmit} type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
