import React,{Component} from 'react';

class Movie extends Component {
      constructor(props){
            super(props);
            this.state = {
                  title: '',
                  genre: '',
                  year: '',
                  img: '',
                  plot: '',
                  imbd: this.props.match.params
            }
            
            console.log(this.state.imbd.id)
      }

componentDidMount(){
        const KEY = '9caa56dd'
   let id = this.state.imbd.id
    
    fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${id}&plot=full`)
    .then(res => (res.json())).then(this.rende)


    }

    rende = (response) => (
       this.setState({
           title: response.Title,
           img: response.Poster,
           genre: response.Genre,
           year: response.Year,
           plot: response.Plot
       })
    )
    
render(){
        return (
        <div>
              <h1>  {this.state.title}</h1>
        <p>{this.state.genre}, {this.state.year}</p>
                <img src={this.state.img} alt={this.state.Title}/>
        <p>{this.state.plot}</p>
        </div>
)}
        }
        
export default Movie;