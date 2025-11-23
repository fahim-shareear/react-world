import React from 'react';
import './Country.css'

const Country = ({country}) => {
    // console.log(country.population.population);
    const handleVisited = () =>{
        console.log("Button Clicked")
    }
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Continant: {country.continents.continents}</p>
            <p>Region: {country.region.region}</p>
            <p>Area: {country.area.area}{country.area.area > 300000 ? "Big Country" : " Small Country"}</p>
            <button onClick={handleVisited}>Not Visited</button>
        </div>
    );
};

export default Country;