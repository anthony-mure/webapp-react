import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

  //definizione della variabile di stato
  const [ movies, setMovies] = useState([]);
  const navigate = useNavigate();


  //funzione che recupera i film attraverso la chiamata ajax
  const fetchMovies = () => {

    axios.get('http://localhost:3000/movies').then((resp) =>{
      setMovies(resp.data);
    })
    .catch((err) => console.log(err))
  };

  //utilizzo useEffect per recuperare la lista dei film
  useEffect(fetchMovies, []);

  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-12 text-center">
           <h2><em className="fs-1">MoviesTeca</em></h2>
        </div> 
         <div className="row">
          {movies.map((movie) => (
            <div className="col-md-4" key={movie.id}>
              <div className="card mb-3" style={{ width: '100%' }}>
                <img src={movie.image} className="card-img-top" alt={movie.title} />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.genre}</p>
                    <button 
                     type="button" 
                     className="btn btn-primary"
                     onClick={() => navigate(`/movies/${movie.id}`)}
                     >
                      Dettaglio Film
                    </button>
                  </div>
               </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HomePage;
