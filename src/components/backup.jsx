import React, { Component } from 'react';

class Movie extends Component{
  constructor(props){
          super(props)
          this.state = {
                  item: '',
                  link: this.props.imbdID
          }
  }
componentDidMount(){

  const KEY = '9caa56dd'
          fetch(`http://www.omdbapi.com/?i=${this.state.link}&apikey=${KEY}`)
          .then(res => (res.json()))
          .then(this.rende)
  
          
  }

  rende = (param) => {
          this.setState({
                  title: param.Title,

          })
  }

render(){
        return(
                <div>
<h1>{this.state.item} </h1>

                </div>
        )
}
}
export default Movie;

const id = props.match.params;
