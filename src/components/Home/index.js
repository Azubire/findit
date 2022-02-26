import React, { useState, useEffect } from "react";
import Header from "../Header";
import { getMovies, getSearchTerm, getFilteredMovies } from "../../fetch";
import Movie from "../movie";


const Home = () => {
const [movies, setMovies] = useState({results:{}});
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    term: ''
  });
  const [searchTerm,setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    getData(page);
  }, [page]);

  const getData = async (page) => {
    try {
      const movie = await getMovies(page);
      // console.log(movie)
      if (movie.results.length > 0) {
        setLoading(false);
        setMovies((prev) =>({
          ...movie,
          results:
          page > 1 ? [...prev.results,...movie.results] : [...movie.results],
        }));
      } else {
        console.log("err");
      }
    } catch (error) {
      console.log(error)
    }
    
  };
    console.log(movies)
 useEffect(()=>{
    getSearch(searchTerm, page);
 },[searchTerm,page])
   
 const getSearch = async (searchTerm, page) => {
   if (searchTerm !== "") {
     
     try {
       setLoading(true);
       const data = await getSearchTerm(searchTerm, page);
       if (data.results.length > 0) {
         setLoading(false);
         setMovies((prev) => [...prev, data.results]);
       } else {
         console.log("no data");
         setLoading((prev) => !prev);
         setMovies([]);
       }
     } catch (error) {
       console.log("failed to get search results : ", error);
       setLoading(prev=>!prev);
     }
   }
 };
    const getSelectedOption = (option) => {
      setFilter(()=>({term:option}))
    }

    useEffect(() => {
      getFilteredTerm(filter.term, page);
    }, [filter, page]);

    const getFilteredTerm = async (term, page) => {
      //  const { term } = filter;
      if (term !== "") {
        try {
          setLoading(() => true);
          const data = await getFilteredMovies(term, page);
          if (data.results.length > 0) {
            setLoading((prev) => !prev);
            setMovies((prev=>({
              results:[...data.results]
            })));
          } else {
            console.log("no data");
          }
        } catch (error) {
          setLoading((prev) => !prev);
        }
      }
     };

  
    
  const handleLoadMore = () => {
    setPage((prev)=>(prev + 1));
  }

  return (
    <>
      <Header setSearchTerm={setSearchTerm} />
      <div className="container mt-5">
        <div className="row mb-5">
          <div className="col justify-content-end align-items-center d-flex">
            <h5 className="mx-3">Filter Movies</h5>
            <select
              name="filter"
              defaultValue={filter}
              onChange={(e) => getSelectedOption(e.target.value)}
            >
              <option value="">Select Option</option>
              <option value="popular">Popular Movies</option>
              <option value="top_rated">Top Rated</option>
              {/* <option value="most-watched">Most Watched</option> */}
              <option value="upcoming">Upcoming Movies</option>
            </select>
          </div>
        </div>

        <div className="row">
          {loading ? (
            <div className="spinner-border position-absolute top-50 start-50 p-5 text-warning">
              <div className=" spinner-grow bg-primary border"></div>
            </div>
          ) : (
            <>
              <Movie movies={movies.results} />
              {movies.results.length > 0 && (
                <div className="col-12 d-flex justify-content-center">
                  <div
                    onClick={handleLoadMore}
                    className="btn btn-warning text-center border"
                  >
                    Load More...
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
