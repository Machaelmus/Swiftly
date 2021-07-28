import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Link } from 'react-router-dom';
import { signUp, login } from '../../store/session';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core';
import styles from './Signup.module.css';

const useStyles = makeStyles({
  root: {
    '& label.Mui-focused': {
      color: 'purple',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'purple',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&:hover fieldset': {
        borderColor: 'purple',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'purple',
      },
    },
  },
})

const SignUpForm = () => {
  const classes = useStyles();
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

  const demoLogin = async (e) => {
    e.preventDefault()
    const demoUser = await dispatch(login('demo@aa.io', 'password'));
    if(demoUser) {
      setErrors(demoUser);
    }
  }

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
    return <Redirect to='/home' />;
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
          <div className={styles.signupTextFields}>
          {/* id="outlined-basic" label="Email" variant="outlined" */}
            <TextField id="outlined-basic" label="Username" variant="outlined" className={classes.root} type='text' name='username' onChange={updateUsername} value={username} />
          </div>
          <div className={styles.signupTextFields}>
            <TextField id="outlined-basic" label="Email" variant="outlined" className={classes.root} type='text' name='email' onChange={updateEmail} value={email} />
          </div>
          <div className={styles.signupTextFields}>
            <TextField id="outlined-basic" label="Password" variant="outlined" className={classes.root} type='password' name='password' onChange={updatePassword} value={password} />
          </div>
          <div className={styles.signupTextFields}>
            <TextField id="outlined-basic" label="Confirm password" variant="outlined" className={classes.root} type='password' name='repeat_password' onChange={updateRepeatPassword} value={repeatPassword} required={true} />
          </div>
          <button className={styles.signupSubmit} type='submit'>Sign Up</button>
          <br/>
          <button className={styles.signupSubmit} onClick={demoLogin} type='submit'>Demo User</button>
          <br/>
          <Link className={styles.dontHaveAccount} to="/login">Already have an account? <span className={styles.noAccountLink}>Log in</span></Link>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
