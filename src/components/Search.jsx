import React,{Component} from 'react'; 
import {Route, Link} from 'react-router-dom';
import Movie from './movie';
class Search extends Component{
    constructor(){
        super()
        this.state = {
            query: '',
            link: '',
            result: [],
            title: '',
            movie: {
                title: '',
                year: '',
                genre: ''
            }
        }
    }

    changeHandler = (e) =>{
        this.setState({
            query: e.target.value
        })
    }

    movieList = (query) => {
        const KEY = '9caa56dd'
    query = this.state.query
    
    fetch(`http://www.omdbapi.com/?s=${query}&apikey=${KEY}`)
    .then(res => (res.json()))
    .then(this.rende)
   
    console.log(this.state.query)
    }

    rende = (response) => (
       this.setState({
           result: response.Search,
           
       })
    )
    
    submitHandler = () =>{
        this.movieList(this.state.query)
    }

    selectedMovie = (id) => {
        this.setState({
            movie : {
                title : id.Title,
                year: id.Year,
                genre: id.Genre
            }
        })
    }
    render(){
        return(
            <div>
            <input type="text" onChange={this.changeHandler}/>
            <button onClick={this.submitHandler}>Search</button>
        
        {this.state.result.map(res => 
        <h3 key={res.imdbID}>
             <Link to={`/${res.imdbID}`}>{res.Title}</Link>
            </h3>)}

         <Route path='/:id' component={Movie} />
         
        
        
        
        
        
            </div>
        )
    }
}

export default Search;