import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Tidy from './pages/Tidy';
import Supreme from './pages/Supreme';
import Cube from './pages/Cube';
import Neon from './pages/Neon';
import Twist from './pages/Twist';

const themeCube = {
  bgColorPrimary: '#161822',
  headerTextColor: '#DDE2F4',
  textColor: '#99A1BA',
  buttonBgColor: '#4A61DD',
  buttonTextColor: '#DDE2F4',
  cardBgColor: '#2B2F40'
};

const themeNeon = {
  bgColorPrimary: '#16171B',
  headerTextColor: '#F9FAFF',
  textColor: '#959CB1',
  buttonBgColor: '#376DF9',
  buttonTextColor: '#F9FAFF',
  cardBgColor: '#292B32'
};

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tidy">
          <Tidy />
        </Route>
        <Route path="/twist">
          <Twist />
        </Route>
        <Route path="/supreme">
          <Supreme />
        </Route>
        <Route path="/cube">
          <Cube />
        </Route>
        <Route path="/neon">
          <Neon />
        </Route>
        <Route path="/">
          <Twist />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
