import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movies";
import { BASE_URL } from "utils/requests";

function Listing() {
  
  /*FORMA ERRADA
  axios.get('http://localhost:8080/movies?size=12&page=0')
       .then(response => {
         console.log(response.data);
       });*/

  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
     //FORMA CERTA
     axios.get(`${BASE_URL}http://localhost:8080/movies?size=12&page=0`)
          .then(response => {
              const data = response.data as MoviePage;
              setPageNumber(data.number);
          });
  }, []);

  
  
  return (
    <>
      <Pagination />

      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Listing;
