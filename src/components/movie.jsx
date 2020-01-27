import React from 'react';

const Movie = (props) => (
    <div>
        <h3>{props.title}</h3>
<p>{props.genre}{props.year}</p>
        <img src={props.poster} alt="poster"/>
<p>{props.plot}</p>
</div>
)

export default Movie;