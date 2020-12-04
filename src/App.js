import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import About from './components/About';
import Contact from './components/ContactMe';
import Resume from './components/Resume';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/Resume" component={Resume} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;