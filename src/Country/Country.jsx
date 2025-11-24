import React from 'react';
import './Country.css'
import { useState } from 'react';

const Country = ({country}) => {

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(true);
    }


    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h1>Name: {country.name.common}</h1>
            <h1>Official Name: {country.name.official}</h1>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? 'Large Country' : 'Small Country'}</p>
            <p>Capital: {country.capital.capital}</p>
            <p>Region: {country.region.region}</p>
            <p>Continent: {country.continents.continents}</p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'} </button>
        </div>
    );
};

export default Country;