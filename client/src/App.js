import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
//Pages & Components
import HomePage from './pages/homepage/HomePage.component';
import LoginPage from './pages/authpages/login/LoginPage.component';
import RegisterPage from './pages/authpages/register/RegisterPage.component';
import Navbar from './components/navbar/Navbar.component';
import Alert from './components/alert/Alert.component';
import DashboardPage from './pages/dashboard/DashboardPage.component';
import PrivateRoute from './components/routing/PrivateRoute.component';
import CreateProfilePage from './pages/create-profile/CreateProfilePage.component';
import EditProfilePage from './pages/edit-profile/EditProfilePage.component';
import AddExperience from './components/profile-form/add-experience/AddExperience.component';
import AddEducation from './components/profile-form/add-education/AddEducation.component';
import DevelopersPage from './pages/developers/DevelopersPage.component.jsx';
import DeveloperProfilePage from './pages/developer-profile/DeveloperProfilePage.component.jsx';
import PostsPage from './pages/posts/PostsPage.component';
import PostPage from './pages/post/PostPage.component';
import NotFoundPage from './pages/notFound/NotFoundPage.component';
//Redux
import { Provider } from 'react-redux';
import store from './redux/store'
import { loadUser } from './redux/actions/auth';
import setAuthToken from './utils/setAuthToken';

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Alert />
          <Switch>
          <Route exact path='/' component={HomePage} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/register' component={RegisterPage} />
            <Route exact path='/profiles' component={DevelopersPage} />
            <Route exact path='/profile/:id' component={DeveloperProfilePage} />
            <PrivateRoute exact path='/dashboard' component={DashboardPage} />
            <PrivateRoute exact path='/create-profile' component={CreateProfilePage} />
            <PrivateRoute exact path='/edit-profile' component={EditProfilePage} />
            <PrivateRoute exact path='/add-experience' component={AddExperience} />
            <PrivateRoute exact path='/add-education' component={AddEducation} />
            <PrivateRoute exact path='/posts' component={PostsPage} />
            <PrivateRoute exact path='/posts/:id' component={PostPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
