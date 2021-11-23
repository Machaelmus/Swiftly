import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navbar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UserProfile/UsersList';
import User from './components/UserProfile/User';
import { authenticate } from './store/session';
import Splash from './components/Splash/Splash';
import SinglePost from './components/SinglePost/SinglePost';
import Home from './components/Home/Home';
import Albums from './components/Albums/Albums';
import SingleAlbum from './components/SingleAlbum/SingleAlbum';
import About from './components/About/About';
import DiscoverAllAlbums from './components/DiscoverAllAlbums/DiscoverAllAlbums';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact={true}>
          <Splash/>
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/signup' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/posts/:id">
          <SinglePost />
        </ProtectedRoute>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/home' exact={true} >
          <Home/>
        </ProtectedRoute>
        <ProtectedRoute path='/albums' exact={true}>
          <Albums/>
        </ProtectedRoute>
        <ProtectedRoute path='/all-albums' exact={true}>
          <DiscoverAllAlbums/>
        </ProtectedRoute>
        <ProtectedRoute path='/album/:id' exact={true}>
          <SingleAlbum/>
        </ProtectedRoute>
        <ProtectedRoute path='/about'>
          <About/>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
