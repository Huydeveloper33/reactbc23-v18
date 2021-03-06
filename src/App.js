// import {logo} from './logo.svg';
import './App.css';
//Cấu hình route
import { Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Fragment } from 'react';
import HeaderHome from './pages/_Component/HeaderHome';
import HomePage from './pages/HomePage/HomePage';
import Login from "./pages/LoginPage/Login.jsx";
import HocDemo from './pages/HocDemo/HocDemo';
import { HomeTemplate } from './pages/templates/HomeTemplate/HomeTemplate';
import { LoginTemplate } from './pages/templates/LoginTemplate/LoginTemplate';

export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
    
      <Switch>

       <LoginTemplate path='/login' component={Login}/>
       <HomeTemplate path='/home' component={HomePage}/>
       <HomeTemplate path='/' component={HomePage}/>


      </Switch>
    </Router>
  );
}

export default App;
