import React, {Component} from 'react';
import './App.css';
import Movie from './components/movie';
import Search from './components/Search';
class App extends Component {

  constructor(){
    super();
    this.state = {
      title: '',
      poster: '',
      year: '',
      genre: '',
      plot: '',
      rezultat: 'Guardians of Galaxy'
    }
  }
  
  componentDidMount() {
    
    const KEY = '9caa56dd'
    let query = this.state.rezultat
    
    fetch(`http://www.omdbapi.com/?s=${query}&apikey=${KEY}`)
    .then(res => (res.json())).then((data) => { this.setState({title: data.Title, poster: data.Poster,genre: data.Genre, year: data.Year, plot: data.Plot}, console.log(data)) } )
  }

  handleChange = (e)=>{
      this.setState({
        rezultat: e.target.value
      }, () => {
        console.log(this.state.rezultat)
      }
      )


    }
submitHandler=(e)=>{
  e.preventDefault();
   this.setState({
     rezultat: e.target.value
    })
    // const KEY = '9caa56dd'
    // let query = this.state.rezultat
    
    // fetch(`http://www.omdbapi.com/?s=${query}&apikey=${KEY}`)
    // .then(res => (res.json())).then((data) => { this.setState({title: data.Title, poster: data.Poster,genre: data.Genre, year: data.Year, plot: data.Plot}, console.log(data)) } )
 
    console.log(this.state.rezultat)
  }
render(){
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Search />
          
        </div>
        {this.state.rezultat}
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
