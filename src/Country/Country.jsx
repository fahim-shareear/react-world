import React from 'react';

const Country = ({country}) => {
    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h1>Name: {country.name.common}</h1>
            <h1>Official Name: {country.name.official}</h1>
            <p>Population: {country.population.population}</p>
        </div>
    );
};

export default Country;