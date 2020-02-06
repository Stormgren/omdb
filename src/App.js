import React, {Component} from 'react';
import Movie from './components/Movie/Movie';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Search from './components/Search/Search';

class App extends Component {

  
render(){
  return (
    <div className="background">
   <Router>
     <Switch>
          <Route path="/" exact component={Search}/>
          <Route path="/:id" component={Movie}/>
    </Switch>
    </Router>
    </div>
  );
}
}

export default App;
