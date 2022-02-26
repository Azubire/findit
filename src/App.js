import Home from "./components/Home";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie-details/:id" element={<MovieDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
