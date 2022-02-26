import React, { useState, useEffect } from "react";
// import backdropImage from "../../images/vendetta.jpg";
import { fetchPopularMovie } from "../../fetch";
import Search from "../Search";

// const imgUrl = "https://image.tmdb.org/t/p/original/";
const Header = ({setSearchTerm}) => {
  const [backDrop, setBackDrop] = useState("");

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    const data = await fetchPopularMovie();

    const { backdrop_path } = data.results[0];

    setBackDrop(backdrop_path);
  };
  return (
    <>
      <header className="container-fluid bg-dark sticky-top">
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-between align-items-center py-3">
              <div className="logo text-white text-uppercase me-2">
                <img
                  src={
                    "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
                  }
                  alt="logo"
                  className=""
                  width={"130"}
                />
              </div>
              <Search setSearchTerm={setSearchTerm} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
