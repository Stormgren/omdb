import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from '../../pages/LoadingSpinner/LoadingSpinner';
import NotFound from "../NotFound";
import {
  Navbar,
  Form,
  Button,
  FormControl,
  Row,
  Card,
  Col,
  Container
} from "react-bootstrap";

import "./Search.styles.css";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      link: "",
      result: [],
      title: "",
      loaded: true
    };
  }

  componentDidMount(){
    this.setState({
      loader: false
    })
  }

  changeHandler = e => {
    this.setState({
      query: e.target.value
    });
  };

  movieList = async query => {
    const KEY = "9caa56dd";
    query = this.state.query;
    
    let result = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${KEY}`)
      .then(res => res.json())
      .then(this.resultRender);

    return result;
  };

  resultRender = response =>
    this.setState({
      result: response.Search
    });

  submitHandler = () => {
    this.movieList(this.state.query);
  };

  render() {
    return (
      <div>
        <Navbar bg="dark" className="justify-content-center">
          <Form inline>
            <FormControl
              type="text"
              size="sm"
              onChange={this.changeHandler}
              className="mr-sm-2"
              placeholder="Movie or show name"
            />
            <Button variant="secondary" size="sm" onClick={this.submitHandler}>
              Search
            </Button>
          </Form>
        </Navbar>
        {this.state.loader ? (
          <LoadingSpinner/>
        ): (
 <Container>
 <Row>
   {this.state.result ? (
     this.state.result.map(res => (
       <Col sm={4} key={res.imdbID}>
         <Card className="card-size">
           <Card.Img
             variant="top"
             src={res.Poster}
             className="card-img"
             alt={res.Title + " Poster"}
           />
           <Card.Body className="card-body">
             <Card.Title>{res.Title}</Card.Title>
             <Button variant="secondary">
               <Link to={`/${res.imdbID}`} className="btn-text">
                 Show More
               </Link>
             </Button>
           </Card.Body>
         </Card>
       </Col>
     ))
   ) : (
     <NotFound />
   )}
 </Row>
</Container>
        )}
       
      </div>
    );
  }
}

export default Search;
