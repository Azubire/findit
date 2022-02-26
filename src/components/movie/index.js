import {React} from "react";
import { Link } from "react-router-dom";

const imgUrl = "https://image.tmdb.org/t/p/original";
const Movie = ({ movies }) => {
  

  // console.log(movies)
  return (
    <>
      {movies.length > 0 ? movies.map((movie) => {
        const {
          poster_path,
          id,
        } = movie;
        return (
          <div key={id} className="col-md-3 col-6 g-3">
            <Link to={`/movie-details/${id}`} className="hover shadow">
              <div className="card text-center">
                <img
                  className="card-card-img-overlay"
                  src={imgUrl + poster_path}
                  alt=''
                />
              </div>
            </Link>
          </div>
        );
      }) : <h5>No Results</h5> }
    </>
  );
};

export default Movie;
