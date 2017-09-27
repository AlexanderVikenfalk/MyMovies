import React from 'react'
import { Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle } from 'reactstrap';


export default function MovieCard({ items }) {
    let list = items.map( (movie, index) => {
      return <div key = {index} className="mx-auto" >
        <Card  className="CardBlock" block inverse  >
        <CardImg top width="30%" src={movie.posterurl} alt="Card image cap" className="CardImg"/>
        <CardBlock id="blackText"> 
          <CardTitle>{movie.title}</CardTitle>
          <CardSubtitle>{movie.imdbRating} </CardSubtitle>
          <CardText>{movie.storyline}</CardText>
        </CardBlock>
        </Card>
      </div>
    });


    return(
      <div className="row">
        { list }
      </div>
        );
  }