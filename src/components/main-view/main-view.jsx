import React from "react";
import axios from 'axios';


import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { RegistrationView } from '../registration-view/registration-view';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './main-view.scss';

class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies:[],
      selectedMovie: null,
      register: false,
    };
  }

 componentDidMount() {
    axios.get("https://lukesmovies.herokuapp.com/movies")
      .then((response) => {
        this.setState({
          movies: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  } 

  /*When a movie is clicked, this function is invoked and updates 
  the state of the `selectedMovie` *property to that movie*/
  setSelectedMovie(movie) {
    this.setState({
      selectedMovie: movie,
    });
  }

  onRegistration() {
    this.setState({
      register: true,
    });
  }

  
  /* When a user successfully logs in, this function updates the
   `user` property in state to that *particular user*/
  onLoggedIn(user) {
    this.setState({
      user,
    });
  }

  render() {
    const { movies, selectedMovie, user, register } = this.state;

    if (!register) return <RegistrationView onRegistration={()=>this.onRegistration()}/>
    /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

    // Before the movies have been loaded
    if (movies.length === 0) return <div className="main-view" />;

    return (
      <Container>
        <div className="main-view">
          {selectedMovie ? (
            <Row className="justify-content-md-center">
              <Col md={8}>
                <MovieView
                  movie={selectedMovie}
                  onBackClick={(newSelectedMovie) => {
                    this.setSelectedMovie(newSelectedMovie);
                  }}
                />
              </Col>
            </Row>
          ) : (
            movies.map((movie) => (
              <MovieCard
                key={movie.Title}
                movie={movie}
                onMovieClick={(movie) => {
                  this.setSelectedMovie(movie);
                }}
              />
            ))
          )}
        </div>
      </Container>
    );
  }
}

export default MainView;