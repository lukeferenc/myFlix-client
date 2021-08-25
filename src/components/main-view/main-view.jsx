import React from "react";
import axios from 'axios';
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies:[
        {Title: "Titanic", Description: "boatMovie", ImgPath: "https://m.media-amazon.com/images/I/91aRw4vKOZL._AC_UY218_.jpg"},
        {Title: "Forsaken", Description: "zombieMovie", ImgPath: "https://ia.media-imdb.com/images/M/MV5BODE0NTUwNzA3Ml5BMl5BanBnXkFtZTgwOTQ3OTI3NzE@._V1_UY1200_CR90,0,630,1200_AL_.jpg"},
        {Title: "Marley and me", Description: "Dogmovie", ImgPath: "https://fanart.tv/fanart/movies/14306/movieposter/marley--me-5dc8167278b2d.jpg"}
      ],
      selectedMovie: null,
    };
  }

 /* componentDidMount() {
    axios
      .get("https://lukesmovies.herokuapp.com/movies")
      .then((response) => {
        this.setState({
          movies: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  } */

  /*When a movie is clicked, this function is invoked and updates 
  the state of the `selectedMovie` *property to that movie*/
  setSelectedMovie(movie) {
    this.setState({
      selectedMovie: movie,
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
     const { movies, selectedMovie } = this.state; // Object Destructuring
    console.log(movies)

    if (movies.length === 0)
      return <div className="main-view">The list is empty!</div>;

    return (
      <div className="main-view">
        {selectedMovie ? (
          <MovieView
            movie={selectedMovie}
            onBackClick={(newSelectedMovie) => {
              this.setSelectedMovie(newSelectedMovie);
            }}
          />
        ) : (
          movies.map((movie) => (
            <MovieCard
              key={movie.Title}
              movieData={movie}
              onMovieClick={(movie) => {
                this.setSelectedMovie(movie);
              }}
            />
          ))
        )}
      </div>
    );
  }
}

export default MainView;