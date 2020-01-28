import React,{Component} from 'react'; 

class Search extends Component{
    constructor(){
        super()
        this.state = {
            query: '',
            result: []
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
           result: response.Search
       })
    )

    submitHandler = () =>{
        this.movieList(this.state.query)
    }
    
    render(){
        return(
            <>
            <input type="text" onChange={this.changeHandler}/>
            <button onClick={this.submitHandler}>Search</button>
            
        {this.state.result.map(res => <p key={res.imdbID}>{res.Title}</p>)}
            
            </>
        )
    }
}

export default Search;