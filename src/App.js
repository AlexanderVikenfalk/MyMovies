import React, { Component } from 'react';
import InputField from './components/InputField.js'
import MovieCard from './components/MovieCard.js'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Input, Select } from 'react-bootstrap';
import SelectForm from './components/SelectForm.js'
import './styles/App.css';

class App extends Component {
  state = {
    allMovies: [],
    moviesByGenre: [],
    genre: '',
    searchTerm: ''
  }

  componentDidMount() {
    fetch(`https://fend-api.herokuapp.com/movies?_limit=20`)
      .then(response => response.json())
      .then(json => {
        this.setState({ allMovies: json });
      });
   }

   filterByGenre = (e) => {

    const moviesByGenre = this.state.allMovies.filter(movie => {
           return movie.genres.includes(e.target.value)
    })
    this.setState({ moviesByGenre: moviesByGenre, genre: e.target.value });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }



  render() {
     const { genre, moviesByGenre, allMovies, searchTerm } = this.state;
     let moviesToRender = genre ? moviesByGenre : allMovies;
     moviesToRender = searchTerm ? moviesToRender.filter(movie => movie.title.includes(searchTerm)) : moviesToRender;
 
    return (
      <div>
      <Navbar className="Navbar">
        <div className="row">
          <div className="mx-auto">
        <Navbar.Header> 
          <h1>My Movies</h1>
        </Navbar.Header>
        </div>
        </div>
        <div className="row">
        <div className="mx-auto styledSelect">
            <InputField name="searchTerm"
                value={searchTerm}
                onChange={this.onChange}/>
            <SelectForm 
                onChange={this.filterByGenre} 
                value={genre} />
          </div>
        </div>
      </Navbar>
    <div className="App container">
      <MovieCard items={moviesToRender} />
    </div>
</div>
    );
  }
}

export default App;
