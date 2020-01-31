import React,{Component} from 'react'; 
import {Route, Link} from 'react-router-dom';
import Movie from '../movie';
import NotFound from '../NotFound';
import {Navbar,Form, Button, FormControl, Row, Card, Col, Container} from 'react-bootstrap';

import './Search.styles.css';

class Search extends Component{
    constructor(){
        super()
        this.state = {
            query: '',
            link: '',
            result: [],
            title: ''
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
    .then(this.resultRender)
   
    }

    resultRender = (response) => (
        this.setState({
            result: response.Search,
            
        })
      
        )
    
    submitHandler = () =>{
        this.movieList(this.state.query)
    }

    
    render(){
        return(
            <div>
                <Navbar bg="dark" className="justify-content-center"> 
                    <Form inline>
            <FormControl type="text" size="sm" onChange={this.changeHandler} placeholder="Enter movie or show name"/>
            <Button variant="secondary" size="sm" onClick={this.submitHandler}>Search</Button>
        </Form>
        </Navbar>
        <Container>
        <Row>
        {this.state.result ?
    (this.state.result.map(res => 
        <Col sm={4} key={res.imdbID}>
        <Card className="card-size">
            <Card.Img variant="top" src={res.Poster} className="card-img" alt="Poster"/>
            <Card.Body>
        <Card.Title>{res.Title}</Card.Title>
        <Button variant="dark">
            
             <Link to={`/${res.imdbID}`}>View More</Link>
             </Button>
             </Card.Body>
            </Card>
            </Col>)
            ) : <NotFound/>
    }
</Row>
</Container>
            </div>
        )
    }
}

export default Search;