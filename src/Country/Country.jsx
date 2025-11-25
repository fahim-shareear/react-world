import React from 'react';
import './Country.css'
import { useState } from 'react';

const Country = ({country}) => {

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        //first logic: Basic system
        // if(visited){
        //     setVisited(false)
        // }else{
        //     setVisited(true)
        // }

        // Second method using the ternary operator:
        // setVisited(visited ? false : true);

        // Third method using the not true operator "!":
        setVisited(!visited);
    }


    return (
        <div className={ `country ${visited && 'country_visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h1>Name: {country.name.common}</h1>
            <h1>Official Name: {country.name.official}</h1>
            <p>Population: {country.population.population} {country.population.population > 10000000 ? ' Densely populated country!!!' : ' Well maintained country'}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? 'Large Country' : 'Small Country'}</p>
            <p>Capital: {country.capital.capital}</p>
            <p>Region: {country.region.region}</p>
            <p>Continent: {country.continents.continents}</p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'} </button>
        </div>
    );
};

export default Country;