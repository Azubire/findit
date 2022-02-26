import {react, useState, useEffect} from "react";
import { useParams ,Link} from "react-router-dom";
import { getMovieDetails } from "../../fetch";

const url = "https://image.tmdb.org/t/p/original";

const MovieDetails = ()=>{
    const [movie, setMovie] = useState({
        id: '',
        title: "",
        backdrop_path: '',
        original_title: '',
        overview: '',
        vote_average: '',
        vote_count: '',
    });
    const param = useParams();
    const id = parseInt(param.id);

useEffect(() => {

  const getMovieById = async (id) => {
      try {
          const data = await getMovieDetails(id);
          const res = await data;
          setMovie(res);
  
      } catch (error) {
          
      }
  }
    getMovieById(id);
}, [id]);


console.log(parseInt(id.id));
    return (
      <div className="container mt-3">
    <Link to={'/'}><button className="btn btn-primary mb-2">Go Back</button></Link>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">{movie.title}</div>
              <div className="card-img">
                <img className="img-fluid" src={url + movie.backdrop_path} alt={movie.original_title} />
              </div>
              <div className="card-body">
                <div className="card-title fw-bold">Movie Overview</div>
                <div className="card-text">{movie.overview}</div>

                <div className="card-title fw-bold">Movie Vote Count</div>
                <div className="card-text">{movie.vote_count}</div>

                <div className="card-title fw-bold">Movie Vote Average</div>
                <div className="card-text">{movie.vote_average}</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}

export default MovieDetails;