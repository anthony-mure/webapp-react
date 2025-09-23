import axios from "axios";
import { useState } from "react";

const ReviewForm = ({movieId, reloadReviews}) => {

  const apiUrl = `http://localhost:3000/movies/${movieId}/reviews`;

  const [formData, setFormData] = useState({

    name:"",
    vote:"",
    text:""

  });

  const setFieldValue = (e) => {

    const {name, value} = e.target;

    setFormData({

      ...formData,
      [name]: value,

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    axios.post(apiUrl, formData, {headers:{"Content-Type": "application/json"}}).then
    ((resp) =>{

      setFormData({
         name:"",
         vote:"",
         text:""
      });
      reloadReviews();

    });

  };


  return (
   <>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Aggiungi una recensione</h2>
        </div>
        <div className="col-12">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor=" " className="form-label">
                Nome
              </label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Nome" 
                name="name" 
                id="name" 
                value={formData.name}
                onChange={setFieldValue}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Voto
              </label>
              <input 
                type="number" 
                className="form-control" 
                placeholder="Voto" 
                min="0" 
                max="5" 
                name="vote" 
                id="vote"
                value={formData.vote}
                onChange={setFieldValue}
              />
            </div>
            <div className="mb-3 ">
              <label className="form-label" htmlFor="">
                Testo Recensione 
              </label>
               <textarea 
                type="text-area" 
                className="form-control" 
                placeholder="Testo Recensione"
                name="text" 
                id="text"
                value={formData.text}
                onChange={setFieldValue}
              />
            </div>
            <button type="submit" className="btn btn-primary mb-3">
              Invia Recensione
            </button>
          </form>
        </div>
      </div>
    </div>
   </> 
  );
};

export default ReviewForm
