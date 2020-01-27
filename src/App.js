import React, {Component} from 'react';
import './App.css';
import Movie from './components/movie';

class App extends Component {

  constructor(){
    super();
    this.state = {
      title: '',
      poster: '',
      year: '',
      genre: '',
      plot: '',
      rezultat: ''
    }
  }
  
  componentDidMount() {
 
    const KEY = '9caa56dd'
  

  fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}`)
    .then(res => (res.json())).then((data) => { this.setState({title: data.Title, poster: data.Poster,genre: data.Genre, year: data.Year, plot: data.Plot}, console.log(data)) } )
  }

submitHandler=(e)=>{
  e.preventDefautlt();
  this.setState({
    rezultat: e.target.value
  })
}
render(){
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input type="text"/>
          <input type="submit" onSubmit={this.submitHandler}/>
        </div>
        <Movie 
        title={this.state.title} 
        poster={this.state.poster} 
        genre={this.state.genre}
        year={this.state.year}
        plot={this.state.plot}
        />
      </header>
    </div>
  );
}
}

export default App;
