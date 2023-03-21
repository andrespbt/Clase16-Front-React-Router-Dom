import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

//Esta pagina renderizará cada bebida de manera individual

const Beer = () => {
  const [beer, setBeer] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const getBeer = async () => {
    //Deberas completar este fetch con el parametro correspondiente
    const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
    const data = await res.json();
    setBeer(data[0]);
  };

  useEffect(() => {
    getBeer();
  });

  return (
    <div>
      <h2>Cerveza numero {id}</h2>
      <div className="card">
        <img
          src={beer.image_url}
          alt="beer-detail"
        />
        <p>{beer.tagline}</p>
        <p>{beer.description}</p>
        <p>{beer.brewers_tips} </p>
      </div>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default Beer;
