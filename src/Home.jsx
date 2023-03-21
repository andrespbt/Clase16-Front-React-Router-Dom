import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './components/Card';

const Home = () => {
  const [beers, setBeers] = useState([]);
  const navigate = useNavigate();

  const handleCardClick = id => {
    navigate(`/beer/${id}`);
  };

  const getBeers = async () => {
    const res = await fetch('https://api.punkapi.com/v2/beers');
    const data = await res.json();
    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <div className="grid">
      {beers.length
        ? beers.map(beer => (
            <Card
              data={beer}
              key={beer.id}
              onClick={handleCardClick}
            />
          ))
        : null}
    </div>
  );
};

export default Home;
