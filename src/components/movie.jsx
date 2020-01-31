import React,{Component} from 'react';
import Search from './Search/Search';
import {Row, Col, Container, Image} from 'react-bootstrap';
import './movie.styles.css';

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
    .then(res => (res.json())).then(this.resultRender)


    }

    resultRender = (response) => (
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
                <>
          
        <Container> 
        <Row className="row-content" bg="dark">
      
        <Col sm={4} md={4}>
        <Image src={this.state.img} alt={this.state.Title} className="img-content" fluid/>
        </Col>
        <Col  sm={8} md={8} className="text-content">
        <h1>{this.state.title}</h1>
        <p>{this.state.genre}, {this.state.year}</p>
        <p>{this.state.plot}</p>
        </Col>
        </Row>
        </Container>
        </>
)}
        }
        
export default Movie;