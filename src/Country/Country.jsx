import React from 'react';

const Country = ({country}) => {
    // console.log(country.population.population);
    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Continant: {country.continents.continents}</p>
            <p>Region: {country.region.region}</p>
            <p>Area: {country.area.area}</p>
            <p></p>
        </div>
    );
};

export default Country;