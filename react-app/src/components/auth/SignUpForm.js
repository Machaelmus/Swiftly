import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Link } from 'react-router-dom';
import { signUp } from '../../store/session';
import styles from './Signup.module.css';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className={styles.signupBackgroundColor}>
      <div className={styles.signupContainer}>
        <form className={styles.signupForm} onSubmit={onSignUp}>
          <h1 className={styles.signupHeading}>Welcome</h1>
          <h2>Create an account</h2>
          <div className={styles.signupErrors}>
            {errors.map((error, ind) => (
              <div className={styles} key={ind}>{error}</div>
            ))}
          </div>
          <div>
            <input className={styles.signupUsername} placeholder="Username" type='text' name='username' onChange={updateUsername} value={username} />
          </div>
          <div>
            <input className={styles.signupEmail} placeholder="Email" type='text' name='email' onChange={updateEmail} value={email} />
          </div>
          <div>
            <input className={styles.signupPassword} placeholder="Password" type='password' name='password' onChange={updatePassword} value={password} />
          </div>
          <div>
            <input className={styles.signupConfirm} placeholder="Confirm password" type='password' name='repeat_password' onChange={updateRepeatPassword} value={repeatPassword} required={true} />
          </div>
          <button className={styles.signupSubmit} type='submit'>Sign Up</button>
          <br/>
          <Link className={styles.dontHaveAccount} to="/login">Already have an account? <span className={styles.noAccountLink}>Log in</span></Link>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
