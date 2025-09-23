import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div className="container mt-3 text-center">
      <div className="row">
        <div className="col-12">
          <h2>Pagina NON trovata</h2>
          <p>Ci dispiace,ma la pagina NON esiste</p>
          <Link  className="btn btn-primary" to="/">
            Torna alla homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
