import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Tidy from './pages/Tidy';
import Twist from './pages/Twist';
import Frame from './pages/Frame';
import Sketch from './pages/Sketch';

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
        <Route path="/frame">
          <Frame />
        </Route>
        <Route path="/sketch">
          <Sketch />
        </Route>
        <Route path="/" exact>
          <Sketch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
