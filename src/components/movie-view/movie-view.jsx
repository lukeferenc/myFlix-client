import React from "react";
import Row from 'react-bootstrap/Row';
import axios from "axios";
import './movie-view.scss';

export class MovieView extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axios
      .get("https://lukesmovies.herokuapp.com/genres")
      .then((response) => {
        this.setState({
          genres: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { movie, onBackClick } = this.props;


    return (
      <div className="movie-view-wrapper ml-5 mt-3">
        <Row>
          <div className="movie-poster">
            <img src={movie.ImgPath} />
         </div>
        </Row>
        <Row>
          <div className="movie-title">
            <span className="label">Title: </span>
            <span className="value">{movie.Title}</span>
          </div>
        </Row>
        <Row>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>
        </Row>
       {/* <div className="movie-genre">
          <span className="label">Genre: </span>
          <span className="value">{movie.Genre}</span>
        </div>
        <div className="movie-director">
          <span className="label">Director: </span>
          <span className="value">{movie.Director}</span>
    </div> */}
        <Row>
          <button 
            onClick={() => {
              onBackClick(null);
            }}
          >
            Back
          </button>
        </Row>
      </div>
    );
  }
}