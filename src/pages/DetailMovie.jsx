import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReviewForm from "../components/ReviewForm";
import axios from "axios";

const DetailMovie = () => {

  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  const currentId = parseInt(id);

  const goToPrev = () => {
    if (currentId > 1) navigate(`/movies/${currentId - 1}`);
  };

  const goToNext = () => {
    navigate(`/movies/${currentId + 1}`);
  };

  const fetchMovie = () => {
    axios.get(`http://localhost:3000/movies/${id}`)
      .then((resp) => {

        setMovie(resp.data);

      })
      .catch((err) => console.log(err));

  };

  
  useEffect(fetchMovie, [id]);

  return (
  <>
    <h1 className="mt-3 mb-2">Dettaglio film</h1>
    <div className="card mb-3 mt-5" style={{maxWidth: "900px"}}>
      <div className="row g-0">
        <div className=" col-4 col-md-4">
          <img src={movie.image} className="img-fluid rounded-start" alt={movie.title}/>
        </div>
        <div className=" col-8 col-md-8 p-4">
          <div className="card-body">
            <h2 className="card-title"><strong>Titolo:</strong>{movie.title}</h2>
            <p className="card-text"><strong>Regista:</strong> {movie.director}</p>
            <p className="card-text"><strong>Genere:</strong> {movie.genre}</p>
            <p className="card-text"><strong>Anno:</strong> {movie.release_year}</p>
            <p className="card-text"><strong>Trama:</strong> {movie.abstract}</p>
            <p className="card-text"><strong>Voto medio:</strong> {movie.avarage_vote}</p>
          </div>
           <div className="d-flex justify-content-between px-4 mb-4">
              <button
                className="btn btn-outline-primary"
                onClick={goToPrev}
                disabled={currentId <= 1}
               >
                ← Film precedente
              </button>
              <button
                 className="btn btn-outline-primary"
                 onClick={goToNext}
                >
                Film successivo →
               </button>
            </div>

        </div>
      </div>
    

    
    <div className="container mt-3 mb-3" style={{ maxWidth: "900px" }}>
      <h2 className="mb-3">Recensioni</h2>
      {movie.reviews && movie.reviews.length > 0 ? (
        movie.reviews.map((review, index) => (
        <div key={index} className="card mb-3 ">
          <div className="card-body">
            <h5 className="card-title">
              <i className="fas fa-user me-2"></i>{review.name}
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">
               Voto: {review.vote}
            </h6>
            <p className="card-text">{review.text}</p>
          </div>
        </div>
      ))
      ) : (
       <div className="alert alert-secondary">Nessuna recensione disponibile</div>
     )}
    </div>
    <div>
      <ReviewForm movieId={id} reloadReviews={fetchMovie}/> 
    </div>
   </div> 
  </>

  )
};

export default DetailMovie;

