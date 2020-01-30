import React, {Component} from 'react';
import Movie from './components/movie';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Search from './components/Search';

class App extends Component {

  
render(){
  return (
   <Router>
     <Switch>
          <Route path="/" exact component={Search}/>
          <Route path="/:id" component={Movie}/>
    </Switch>
   
    </Router>
  );
}
}

export default App;
