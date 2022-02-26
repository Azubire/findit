
const API_Key = "33ef82c9741687924afd70f7e09d6cbb";

const getMovies = async (page) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}&language=en-US&page=${page}`
  );

  const response = await data.json();

  return await response;
};

const getFilteredMovies = async (term, page) => {
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${term}?api_key=${API_Key}&language=en-US&page=${page}`
    );

    const response = await data.json();
    return response;
  } catch (error) {
    console.log('failed to get popular movies', error)
  }
}

const fetchPopularMovie = async () => {
  const movie = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}&language=en-US&page=1`
  );

  const response = await movie.json();

  return await response;
};

const getMovieDetails = async (id) =>{
  try {
    const movie = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_Key}&language=en-US`
    );

    const response = await movie.json();

    return response;

  } catch (error) {
    console.log('Failed to fetch :', error);
  }
}

const getSearchTerm = async (searchTerm, page)=>{
  try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=33ef82c9741687924afd70f7e09d6cbb&query=${searchTerm}&page${page}`
      );
      const res = await data.json();
    return res;
  } catch (error) {
    console.log('Error Searching: ', error);
  }
}

export { getMovies, fetchPopularMovie, getMovieDetails,getSearchTerm,getFilteredMovies };
