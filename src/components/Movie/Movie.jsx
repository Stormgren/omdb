import React, { Component } from "react";
import { Row, Navbar, Col, Container, Image, Button } from "react-bootstrap";
import LoadingSpinner from '../../pages/LoadingSpinner/LoadingSpinner';
import { Link } from "react-router-dom";
import "./Movie.styles.css";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      genre: "",
      year: "",
      img: "",
      plot: "",
      director: "",
      writer: "",
      actors: "",
      runtime: "",
      rated: "",
      language: "",
      country: "",
      awards: "",
      production: "",
      metascore: "",
      imdbrating: "",
      imbd: this.props.match.params,
      loader: true
    };

    console.log(this.state.imbd.id);
  }

  componentDidMount() {
    
    this.movieDetails();
    // this.setState({loader: false})

    setTimeout(() => { 
      this.setState({loader: false})
    },2000)
  }

  resultRender = response =>
    this.setState({
      title: response.Title,
      img: response.Poster,
      genre: response.Genre,
      year: response.Year,
      plot: response.Plot,
      director: response.Director,
      writer: response.Writer,
      actors: response.Actors,
      runtime: response.Runtime,
      rated: response.Rated,
      language: response.Language,
      country: response.Country,
      awards: response.Awards,
      production: response.Production,
      metascore: response.Metascore,
      imdbrating: response.imdbRating
    });

  movieDetails = async () => {
    const KEY = "9caa56dd";
    let id = this.state.imbd.id;

    let details = await fetch(
      `http://www.omdbapi.com/?apikey=${KEY}&i=${id}&plot=full`
    )
      .then(res => res.json())
      .then(this.resultRender);

    return details;
  };

  render() {
    return (
      <>
       <Navbar bg="dark">
          <Button variant="info">
            <Link to="/" className="btn-text">
              Search More
            </Link>
          </Button>
        </Navbar>
      {this.state.loader ? (
       <LoadingSpinner/>
      ) : (
        <Container className="content">
          <Row className="row-content" bg="dark">
            <Col sm={4} md={4}>
              <Image
                src={this.state.img}
                alt={this.state.Title}
                className="img-content"
                fluid
              />
            </Col>
            <Col sm={8} md={8} className="text-content">
              <h1>{this.state.title}</h1>
              <p>
                {this.state.genre}, {this.state.year} Runtime:{" "}
                {this.state.runtime}
              </p>
              <p>
                {this.state.production} {this.state.language}
              </p>
              <p>
                {" "}
                Metascore: {this.state.metascore}/100 IMDB rating:{" "}
                {this.state.imdbrating}/10
              </p>
              <p>Directed by: {this.state.director}</p>{" "}
              <p>Written by: {this.state.writer}</p>
              <p> Actors: {this.state.actors}</p>
              <p>{this.state.plot}</p>
            </Col>
       </Row>
        </Container>
     
      )}
      </>
    );
  }
}

export default Movie;
