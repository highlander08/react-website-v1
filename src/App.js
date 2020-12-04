import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Cat from './components/pages/Cat';
import Dog from './components/pages/Dog';
import Bird from './components/pages/Bird';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route path='/services' component={Services} /> */}
          <Route path='/products' component={Products} />
          <Route path='/Cat' component={Cat} />
          <Route path='/Dog' component={Dog} />
          <Route path='/Bird' component={Bird} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
